import { z } from 'zod';
import { cache } from '../../utils/cache.js';
import { logInfo } from '../../utils/logger.js';
import { searchComponents } from '../../data/components.js';

export const schema = {
  query: z.string().describe('Search query to find components by name, description, or tags')
};

export async function handleSearchComponents(params: { query: string }) {
  const { query } = params;
  logInfo(`Searching components: ${query}`);

  // Check cache
  const cacheKey = `search-${query.toLowerCase()}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  // Search components
  const results = searchComponents(query);

  if (results.length === 0) {
    return {
      content: [{
        type: "text",
        text: `No components found matching "${query}". Try different keywords or use list_components to see all available components.`
      }]
    };
  }

  // Generate markdown content
  const content = generateSearchResultsMarkdown(query, results);

  const result = {
    content: [{
      type: "text",
      text: content
    }]
  };

  // Cache for 30 minutes
  cache.set(cacheKey, result, 30 * 60 * 1000);

  return result;
}

function generateSearchResultsMarkdown(query: string, results: any[]): string {
  return `# Search Results for "${query}"

Found ${results.length} component${results.length !== 1 ? 's' : ''}

${results.map((c, i) =>
  `## ${i + 1}. ${c.name}

- **Slug**: \`${c.slug}\`
- **Description**: ${c.description}
- **Category**: ${c.category}
- **Tags**: ${c.tags.map((t: string) => `\`${t}\``).join(', ')}
- **URL**: ${c.url}

---
`
).join('\n')}

## Next Steps

To get detailed information about any component, use:
\`\`\`
get_component({ componentName: "component-slug" })
\`\`\`
`;
}
