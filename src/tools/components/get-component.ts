import { z } from 'zod';
import { cache } from '../../utils/cache.js';
import { logInfo } from '../../utils/logger.js';
import { getComponent } from '../../data/components.js';

export const schema = {
  componentName: z.string().describe('The slug or name of the Aceternity UI component')
};

export async function handleGetComponent(params: { componentName: string }) {
  const { componentName } = params;
  logInfo(`Getting component: ${componentName}`);

  // Check cache
  const cacheKey = `component-${componentName.toLowerCase()}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  // Get component data
  const component = getComponent(componentName);

  if (!component) {
    return {
      content: [{
        type: "text",
        text: `Component "${componentName}" not found. Use list_components to see available components.`
      }]
    };
  }

  // Generate markdown content
  const content = generateComponentMarkdown(component);

  const result = {
    content: [{
      type: "text",
      text: content
    }]
  };

  // Cache for 1 hour
  cache.set(cacheKey, result, 60 * 60 * 1000);

  return result;
}

function generateComponentMarkdown(component: any): string {
  return `# ${component.name}

## Description
${component.description}

## Details
- **Category**: ${component.category}
- **Slug**: \`${component.slug}\`
- **Tags**: ${component.tags.map((t: string) => `\`${t}\``).join(', ')}

## URL
${component.url}

## Installation

To use this component in your project:

1. Visit the component page: ${component.url}
2. Copy the component code
3. Install required dependencies if any
4. Paste into your project

## Usage Notes

This is a ${component.category} component from Aceternity UI. ${component.description}

Make sure you have Tailwind CSS and Framer Motion installed in your project, as most Aceternity UI components depend on these libraries.

\`\`\`bash
npm install framer-motion clsx tailwind-merge
\`\`\`

## Dependencies
${component.dependencies ? component.dependencies.map((d: string) => `- ${d}`).join('\n') : '- framer-motion\n- tailwind-merge\n- clsx'}

## Related Components
Check out other components in the "${component.category}" category for similar effects.
`;
}
