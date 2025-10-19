import { categories } from './data/components.js';

export const resources = [
  {
    uri: 'resource:aceternity_components',
    name: 'Aceternity UI Components List',
    description: 'List of all available Aceternity UI components',
    mimeType: 'text/plain'
  },
  {
    uri: 'resource:aceternity_categories',
    name: 'Component Categories',
    description: 'Categories of Aceternity UI components',
    mimeType: 'text/plain'
  }
];

export const resourceHandlers: Record<string, () => { contentType: string; content: string }> = {
  'resource:aceternity_components': () => ({
    contentType: 'text/plain',
    content: `Aceternity UI Components

Aceternity UI provides beautiful, animated components built with React, Tailwind CSS, and Framer Motion.

Available categories:
${Object.entries(categories).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Use the list_components tool to see all available components.
Use the get_component tool to get detailed information about a specific component.
Use the search_components tool to search for components by keyword.
`
  }),
  'resource:aceternity_categories': () => ({
    contentType: 'text/plain',
    content: `Aceternity UI Component Categories

${Object.entries(categories).map(([key, value]) => `${key}: ${value}`).join('\n')}

Use list_components with a category parameter to filter components by category.
`
  })
};
