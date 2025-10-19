# Contributing to Aceternity UI MCP Server

Thank you for considering contributing to the Aceternity UI MCP Server!

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Test the server: `node build/index.js --help`

## Project Structure

```
aceternity_ui_mcp/
├── src/
│   ├── index.ts              # Entry point
│   ├── handler.ts            # Request handlers
│   ├── resources.ts          # Static resources
│   ├── prompts.ts            # Prompts
│   ├── data/
│   │   └── components.ts     # Component database
│   ├── tools/
│   │   ├── index.ts          # Tool registry
│   │   └── components/       # Tool implementations
│   └── utils/                # Utilities
├── build/                    # Compiled output
└── package.json
```

## Adding New Components

To add new Aceternity UI components:

1. Edit `src/data/components.ts`
2. Add the component to the `components` object:

```typescript
'component-slug': {
  name: 'Component Name',
  slug: 'component-slug',
  description: 'Component description',
  category: 'category-name',
  tags: ['tag1', 'tag2'],
  url: 'https://ui.aceternity.com/components/component-slug'
}
```

3. Rebuild: `npm run build`

## Adding New Tools

To add a new tool:

1. Create a new file in `src/tools/[category]/[tool-name].ts`
2. Implement the tool following this pattern:

```typescript
import { z } from 'zod';
import { cache } from '../../utils/cache.js';
import { logInfo } from '../../utils/logger.js';

export const schema = {
  paramName: z.string().describe('Parameter description')
};

export async function handleToolName(params: { paramName: string }) {
  // Implementation
}
```

3. Register the tool in `src/tools/index.ts`:
   - Add to `toolHandlers`
   - Add to `toolSchemas`
   - Add to `tools` with MCP metadata

4. Update validation in `src/utils/validation.ts`

## Code Style

- Use TypeScript strict mode
- Follow existing code patterns
- Add JSDoc comments for public APIs
- Use meaningful variable names
- Keep functions focused and small

## Testing

Before submitting:

1. Build successfully: `npm run build`
2. Test CLI commands:
   - `node build/index.js --help`
   - `node build/index.js --version`
3. Test with Claude Desktop (if available)

## Commit Messages

Use clear, descriptive commit messages:

- `feat: Add new component X`
- `fix: Correct search functionality`
- `docs: Update README with examples`
- `refactor: Improve caching logic`

## Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Build and test
5. Commit with clear messages
6. Push to your fork
7. Create a pull request

## Questions?

Open an issue for:
- Bug reports
- Feature requests
- Documentation improvements
- General questions

Thank you for contributing!
