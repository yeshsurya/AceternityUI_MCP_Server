import { z } from 'zod';
import { cache } from '../../utils/cache.js';
import { logInfo } from '../../utils/logger.js';
import { getComponentsByCategory, categories } from '../../data/components.js';

export const schema = {
  category: z.string().optional().describe('Optional category to filter components (e.g., "backgrounds", "3d", "overlays")')
};

export async function handleListComponents(params: { category?: string }) {
  const { category } = params;
  logInfo(`Listing components${category ? ` for category: ${category}` : ''}`);

  // Check cache
  const cacheKey = `list-components-${category || 'all'}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  // Get components
  const components = getComponentsByCategory(category);

  if (components.length === 0) {
    return {
      content: [{
        type: "text",
        text: category
          ? `No components found in category "${category}". Available categories: ${Object.keys(categories).join(', ')}`
          : 'No components found.'
      }]
    };
  }

  // Generate markdown content
  const content = generateComponentsListMarkdown(components, category);

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

function generateComponentsListMarkdown(components: any[], category?: string): string {
  const header = category
    ? `# Aceternity UI Components - ${categories[category as keyof typeof categories] || category}`
    : '# Aceternity UI Components';

  const categoriesSection = !category ? `\n## Available Categories\n${Object.entries(categories).map(([key, value]) => `- **${key}**: ${value}`).join('\n')}\n` : '';

  const componentsSection = `\n## Components (${components.length})\n\n${components.map(c =>
    `### ${c.name}\n- **Slug**: \`${c.slug}\`\n- **Description**: ${c.description}\n- **Category**: ${c.category}\n- **Tags**: ${c.tags.map((t: string) => `\`${t}\``).join(', ')}\n- **URL**: ${c.url}\n`
  ).join('\n')}`;

  return `${header}${categoriesSection}${componentsSection}

## Usage

To get detailed information about a specific component, use the \`get_component\` tool with the component slug.

Example:
\`\`\`
get_component({ componentName: "background-beams" })
\`\`\`

## Installation

All Aceternity UI components require:
- React 18+
- Tailwind CSS
- Framer Motion

\`\`\`bash
npm install framer-motion clsx tailwind-merge
\`\`\`
`;
}
