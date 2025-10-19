# Aceternity UI MCP Server - Usage Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Server
```bash
npm run build
```

### 3. Test the Server
```bash
node build/index.js --help
node build/index.js --version
```

## Configuration with Claude Desktop

### Location of Config File

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

**macOS:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Linux:**
```
~/.config/Claude/claude_desktop_config.json
```

### Configuration Example

```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "node",
      "args": ["C:\\gitRepos\\aceternity_ui_mcp\\build\\index.js"],
      "env": {
        "LOG_LEVEL": "info"
      }
    }
  }
}
```

### After Configuration

1. Save the configuration file
2. Restart Claude Desktop
3. The MCP server will be automatically loaded
4. You can now use Aceternity UI tools in your conversations

## Using the Tools

### Example 1: List All Components

Ask Claude:
```
Can you list all Aceternity UI components?
```

Claude will use the `list_components` tool.

### Example 2: Search for Components

Ask Claude:
```
Find all Aceternity UI components related to animations
```

Claude will use the `search_components` tool with query "animations".

### Example 3: Get Component Details

Ask Claude:
```
Tell me about the background-beams component from Aceternity UI
```

Claude will use the `get_component` tool with componentName "background-beams".

### Example 4: Filter by Category

Ask Claude:
```
Show me all background components from Aceternity UI
```

Claude will use the `list_components` tool with category "backgrounds".

## Available Tools

### 1. get_component

Get detailed information about a specific component.

**When to use:**
- You want details about a specific component
- You know the component name/slug
- You need installation or usage information

**Example Questions:**
- "What is the background-beams component?"
- "How do I use the animated-modal?"
- "Tell me about the 3d-pin component"

### 2. list_components

List all components, optionally filtered by category.

**When to use:**
- You want to see all available components
- You want to browse by category
- You're exploring what's available

**Example Questions:**
- "List all Aceternity UI components"
- "Show me all 3D components"
- "What background components are available?"

**Categories:**
- `backgrounds` - Background effects and animations
- `3d` - 3D components
- `overlays` - Modals, tooltips, popovers
- `carousel` - Carousels and sliders
- `layout` - Layout and grid components
- `visualization` - Data visualization

### 3. search_components

Search for components by keyword.

**When to use:**
- You're looking for specific functionality
- You don't know the exact component name
- You want to find components with certain features

**Example Questions:**
- "Find components with gradient effects"
- "Search for animated components"
- "Find all components with hover effects"

## Available Resources

### resource:aceternity_components
Overview of all Aceternity UI components

### resource:aceternity_categories
List of component categories

## Available Prompts

### component_usage
Get guidance on using a specific component.

**Example:**
```
Use the component_usage prompt for background-beams
```

### animation_guide
Get recommendations for animation components.

**Example:**
```
Use the animation_guide prompt for hero section animations
```

### background_selector
Get help choosing a background component.

**Example:**
```
Use the background_selector prompt with minimal style
```

## Tips for Best Results

1. **Be Specific:** Instead of "show me components", try "show me all background components with animation effects"

2. **Use Natural Language:** The tools work with natural language queries
   - Good: "Find components for hero sections"
   - Also Good: "What components can I use for a landing page header?"

3. **Explore Categories:** Start with categories to narrow down options
   - "List all background components"
   - Then: "Tell me more about background-beams"

4. **Search by Tags:** Components are tagged, so search by functionality
   - "gradient"
   - "hover"
   - "3d"
   - "animation"

## Troubleshooting

### Server Not Showing in Claude Desktop

1. Check config file location and syntax
2. Verify the path to `build/index.js` is correct
3. Restart Claude Desktop
4. Check Claude Desktop logs

### Tools Not Working

1. Verify the server built successfully: `npm run build`
2. Check for TypeScript errors
3. Test CLI: `node build/index.js --help`
4. Check logs with: `LOG_LEVEL=debug node build/index.js`

### Component Not Found

1. Use `list_components` to see available components
2. Check the component slug (use hyphens, lowercase)
3. Verify spelling

## Advanced Usage

### Custom Log Level

```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "node",
      "args": ["C:\\gitRepos\\aceternity_ui_mcp\\build\\index.js"],
      "env": {
        "LOG_LEVEL": "debug"
      }
    }
  }
}
```

### Running Standalone

```bash
# Standard
node build/index.js

# With debug logging
LOG_LEVEL=debug node build/index.js

# Development mode (rebuild + run)
npm run dev
```

## Component Installation Workflow

When Claude suggests an Aceternity UI component:

1. Claude uses `get_component` to get details
2. Claude provides:
   - Component description
   - Installation instructions
   - Usage notes
   - URL to component page
3. You visit the URL to copy the component code
4. Install dependencies: `npm install framer-motion clsx tailwind-merge`
5. Paste component into your project

## Example Workflow

```
You: "I need an animated background for my landing page hero section"

Claude: [Uses search_components with query "background animation"]
Claude: "I found several options. Let me get details on the most popular ones..."
Claude: [Uses get_component for "background-beams" and "aurora-background"]
Claude: "Here are two great options:
1. Background Beams - Dramatic SVG-based beams
2. Aurora Background - Subtle, elegant aurora effect
..."

You: "Tell me more about background beams"

Claude: [Uses get_component with "background-beams"]
Claude: "Background Beams is a backgrounds component that creates multiple
background beams following SVG paths. Great for hero sections..."
```

## Resources

- Aceternity UI Website: https://ui.aceternity.com
- Components Page: https://ui.aceternity.com/components
- MCP Documentation: https://modelcontextprotocol.io

## Support

For issues:
1. Check this usage guide
2. Review the README.md
3. Check component on Aceternity UI website
4. Open an issue in the repository
