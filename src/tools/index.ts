import {
  schema as getComponentSchema,
  handleGetComponent
} from './components/get-component.js';
import {
  schema as listComponentsSchema,
  handleListComponents
} from './components/list-components.js';
import {
  schema as searchComponentsSchema,
  handleSearchComponents
} from './components/search-components.js';

// Tool handlers registry
export const toolHandlers = {
  get_component: handleGetComponent,
  list_components: handleListComponents,
  search_components: handleSearchComponents
};

// Tool schemas for validation
export const toolSchemas = {
  get_component: getComponentSchema,
  list_components: listComponentsSchema,
  search_components: searchComponentsSchema
};

// Tool definitions for MCP
export const tools = {
  get_component: {
    name: 'get_component',
    description: 'Get detailed information about a specific Aceternity UI component by its slug',
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'The slug or name of the component (e.g., "background-beams", "animated-modal")'
        }
      },
      required: ['componentName']
    }
  },
  list_components: {
    name: 'list_components',
    description: 'List all available Aceternity UI components, optionally filtered by category',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          description: 'Optional category filter (e.g., "backgrounds", "3d", "overlays", "carousel", "layout", "visualization")'
        }
      }
    }
  },
  search_components: {
    name: 'search_components',
    description: 'Search for Aceternity UI components by name, description, or tags',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query (e.g., "animation", "gradient", "3d", "modal")'
        }
      },
      required: ['query']
    }
  }
};
