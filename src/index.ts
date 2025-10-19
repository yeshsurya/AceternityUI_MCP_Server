#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { setupHandlers } from './handler.js';
import { logInfo, logError } from './utils/logger.js';

async function parseArgs() {
  const args = process.argv.slice(2);
  const options: { help?: boolean; version?: boolean } = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--version' || arg === '-v') {
      options.version = true;
    }
  }

  return options;
}

function printHelp() {
  console.log(`
Aceternity UI MCP Server

Usage:
  aceternity-ui-mcp-server [options]

Options:
  --help, -h       Show this help message
  --version, -v    Show version information

Environment Variables:
  LOG_LEVEL        Set logging level (debug, info, warn, error) [default: info]

Examples:
  aceternity-ui-mcp-server
  LOG_LEVEL=debug aceternity-ui-mcp-server

Description:
  MCP server providing access to Aceternity UI component library documentation.
  Includes tools for listing, searching, and getting detailed component information.

Tools:
  - get_component       Get detailed information about a specific component
  - list_components     List all available components (optionally filtered by category)
  - search_components   Search for components by name, description, or tags

For more information, visit: https://ui.aceternity.com
`);
}

function printVersion() {
  console.log('Aceternity UI MCP Server v1.0.0');
}

async function main() {
  try {
    const options = await parseArgs();

    if (options.help) {
      printHelp();
      process.exit(0);
    }

    if (options.version) {
      printVersion();
      process.exit(0);
    }

    logInfo('Starting Aceternity UI MCP Server...');

    const server = new Server(
      {
        name: 'aceternity-ui-mcp-server',
        version: '1.0.0'
      },
      {
        capabilities: {
          resources: {},
          prompts: {},
          tools: {}
        }
      }
    );

    // Setup request handlers
    setupHandlers(server);

    // Connect to transport
    const transport = new StdioServerTransport();
    await server.connect(transport);

    logInfo('Aceternity UI MCP Server is running');

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      logInfo('Shutting down gracefully...');
      await server.close();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      logInfo('Shutting down gracefully...');
      await server.close();
      process.exit(0);
    });
  } catch (error) {
    logError('Failed to start server', error);
    process.exit(1);
  }
}

main();
