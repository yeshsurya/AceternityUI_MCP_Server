import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from '@modelcontextprotocol/sdk/types.js';
import { toolHandlers, tools } from './tools/index.js';
import { resources, resourceHandlers } from './resources.js';
import { prompts, promptHandlers } from './prompts.js';
import { validateAndSanitizeParams } from './utils/validation.js';
import { circuitBreakers } from './utils/circuit-breaker.js';
import { logInfo, logError } from './utils/logger.js';

async function handleRequest<T>(
  method: string,
  params: any,
  handler: (validatedParams: any) => Promise<T>
): Promise<T> {
  try {
    logInfo(`Handling request: ${method}`);
    const validatedParams = validateAndSanitizeParams(method, params);
    const result = await circuitBreakers.external.execute(() => handler(validatedParams));
    return result;
  } catch (error) {
    logError(`Error in ${method}`, error);
    throw error;
  }
}

export function setupHandlers(server: Server) {
  // List available resources
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return await handleRequest('list_resources', {}, async () => ({
      resources: resources
    }));
  });

  // Read a specific resource
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    return await handleRequest('read_resource', request.params, async (params) => {
      const handler = resourceHandlers[params.uri];
      if (!handler) {
        throw new Error(`Resource not found: ${params.uri}`);
      }
      const { contentType, content } = handler();
      return {
        contents: [{
          uri: params.uri,
          mimeType: contentType,
          text: content
        }]
      };
    });
  });

  // List available prompts
  server.setRequestHandler(ListPromptsRequestSchema, async () => {
    return await handleRequest('list_prompts', {}, async () => ({
      prompts: Object.values(prompts)
    }));
  });

  // Get a specific prompt
  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    return await handleRequest('get_prompt', request.params, async (params) => {
      const handler = promptHandlers[params.name];
      if (!handler) {
        throw new Error(`Prompt not found: ${params.name}`);
      }
      return handler(params.arguments || {});
    });
  });

  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return await handleRequest('list_tools', {}, async () => ({
      tools: Object.values(tools)
    }));
  });

  // Call a tool
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    return await handleRequest('call_tool', request.params, async (params) => {
      const { name, arguments: args } = params;

      const handler = toolHandlers[name as keyof typeof toolHandlers];
      if (!handler) {
        throw new Error(`Tool not found: ${name}`);
      }

      logInfo(`Executing tool: ${name}`);
      const result = await circuitBreakers.external.execute(() =>
        Promise.resolve(handler(args || {}))
      );

      return result;
    });
  });

  logInfo('Request handlers setup complete');
}
