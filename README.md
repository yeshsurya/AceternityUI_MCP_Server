# Aceternity UI MCP Server

A Model Context Protocol (MCP) server that provides access to the Aceternity UI component library documentation and tools.

## Overview

This MCP server allows AI assistants to:
- Browse Aceternity UI components
- Search for specific components
- Get detailed component information
- Access component documentation and usage examples

## Installation

### Option 1: Install from npm (Recommended)

```bash
npm install -g aceternity-ui-mcp-server
```

### Option 2: Install from source

```bash
git clone https://github.com/yeshsurya/AceternityUI_MCP_Server.git
cd AceternityUI_MCP_Server
npm install
npm run build
```

## Usage

### Running the Server

If installed globally via npm:

```bash
aceternity-ui-mcp-server
```

If installed from source:

```bash
npm start
```

Or directly:

```bash
node build/index.js
```

### Command Line Options

```bash
aceternity-ui-mcp-server --help     # Show help
aceternity-ui-mcp-server --version  # Show version
```

### Environment Variables

- `LOG_LEVEL`: Set logging level (debug, info, warn, error). Default: `info`

Example:
```bash
LOG_LEVEL=debug npm start
```

## Configuration with Claude Desktop

Add to your Claude Desktop configuration file:

### macOS/Linux
`~/Library/Application Support/Claude/claude_desktop_config.json`

### Windows
`%APPDATA%\Claude\claude_desktop_config.json`

### If installed via npm (recommended):
```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "aceternity-ui-mcp-server"
    }
  }
}
```

### If installed from source:
```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "node",
      "args": ["C:\\gitRepos\\aceternity_ui_mcp\\build\\index.js"]
    }
  }
}
```

Note: On macOS/Linux, use forward slashes in paths. On Windows, use double backslashes.

## Configuration with GitHub Copilot CLI

GitHub Copilot CLI now supports MCP servers! You can add this server to your Copilot CLI configuration.

### Configuration File Location

The MCP configuration file is located at:
- **macOS/Linux**: `~/.config/mcp-config.json`
- **Windows**: `%USERPROFILE%\.config\mcp-config.json`

You can change this location by setting the `XDG_CONFIG_HOME` environment variable.

### Method 1: Interactive Configuration (Recommended)

1. Install the server globally:
   ```bash
   npm install -g aceternity-ui-mcp-server
   ```

2. Open GitHub Copilot CLI and add the server interactively:
   ```bash
   gh copilot
   ```

3. Use the interactive UI to add a new MCP server:
   - Press the appropriate key to add a server
   - Fill in the server details:
     - **Name**: `aceternity-ui`
     - **Command**: `aceternity-ui-mcp-server`
     - **Type**: `stdio`
   - Press `Ctrl+S` to save

### Method 2: Manual Configuration

Edit your `mcp-config.json` file manually:

```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "aceternity-ui-mcp-server",
      "type": "stdio"
    }
  }
}
```

Or if installed from source:

```json
{
  "mcpServers": {
    "aceternity-ui": {
      "command": "node",
      "args": ["/path/to/aceternity_ui_mcp/build/index.js"],
      "type": "stdio"
    }
  }
}
```

### Verifying the Configuration

After configuration, restart GitHub Copilot CLI. The Aceternity UI MCP server should now be available, and you can ask Copilot questions like:
- "List all Aceternity UI background components"
- "Show me the background-beams component"
- "Search for animation components in Aceternity UI"

## Configuration with VS Code

If you're using VS Code with GitHub Copilot, you can also configure MCP servers:

1. Open VS Code Settings (JSON)
2. Add the MCP server configuration:

```json
{
  "github.copilot.chat.mcp.servers": {
    "aceternity-ui": {
      "command": "aceternity-ui-mcp-server",
      "type": "stdio"
    }
  }
}
```

3. Restart VS Code or reload the window

### Example Configuration Files

Example configuration files are provided in this repository:
- `claude_desktop_config.example.json` - Claude Desktop configuration
- `copilot_cli_config.example.json` - GitHub Copilot CLI configuration

You can copy these files and modify them to match your installation path.

## Available Tools

### 1. `get_component`
Get detailed information about a specific Aceternity UI component.

**Parameters:**
- `componentName` (string, required): The slug or name of the component

**Example:**
```json
{
  "componentName": "background-beams"
}
```

### 2. `list_components`
List all available Aceternity UI components, optionally filtered by category.

**Parameters:**
- `category` (string, optional): Filter by category (e.g., "backgrounds", "3d", "overlays")

**Example:**
```json
{
  "category": "backgrounds"
}
```

### 3. `search_components`
Search for components by name, description, or tags.

**Parameters:**
- `query` (string, required): Search query

**Example:**
```json
{
  "query": "animation"
}
```

## Available Resources

- `resource:aceternity_components` - List of all available components
- `resource:aceternity_categories` - Component categories

## Available Prompts

### 1. `component_usage`
Get guidance on how to use a specific component.

**Arguments:**
- `componentName` (required): Component name or slug

### 2. `animation_guide`
Get recommendations for animation components.

**Arguments:**
- `useCase` (required): The effect you want to achieve

### 3. `background_selector`
Get help choosing the right background component.

**Arguments:**
- `style` (optional): Style or mood (e.g., "minimal", "dramatic")

## Component Categories

- **backgrounds**: Background effects and animations
- **3d**: 3D components and effects
- **overlays**: Modals, tooltips, and overlays
- **carousel**: Carousels and sliders
- **layout**: Layout components and grids
- **visualization**: Data visualization components

## Architecture

```
aceternity_ui_mcp/
├── src/
│   ├── index.ts              # Entry point and server initialization
│   ├── handler.ts            # Request handlers
│   ├── resources.ts          # Static resources
│   ├── prompts.ts            # Prompt definitions
│   ├── data/
│   │   └── components.ts     # Component data structure
│   ├── tools/
│   │   ├── index.ts          # Tool registry
│   │   └── components/       # Component-related tools
│   └── utils/
│       ├── logger.ts         # Logging utilities
│       ├── cache.ts          # Caching layer
│       ├── circuit-breaker.ts # Circuit breaker pattern
│       ├── validation.ts     # Input validation
│       └── axios.ts          # HTTP client
├── build/                    # Compiled JavaScript
├── package.json
└── tsconfig.json
```

## Features

- **Comprehensive Component Database**: All Aceternity UI components with descriptions and metadata
- **Smart Search**: Search by name, description, or tags
- **Category Filtering**: Browse components by category
- **Caching**: In-memory caching for improved performance
- **Circuit Breaker**: Resilience pattern for external calls
- **Input Validation**: Zod-based schema validation
- **Structured Logging**: Winston-based logging with configurable levels

## Development

### Build
```bash
npm run build
```

### Development Mode
```bash
npm run dev
```

### Clean Build
```bash
npm run clean
npm run build
```

## Requirements

- Node.js 18 or higher
- npm or yarn

## Dependencies

- `@modelcontextprotocol/sdk`: MCP protocol implementation
- `axios`: HTTP client
- `cheerio`: HTML parsing
- `zod`: Runtime type validation
- `winston`: Logging
- `joi`: Validation
- `uuid`: ID generation

## License

MIT

## Related Links

- [Aceternity UI](https://ui.aceternity.com)
- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Model Context Protocol](https://modelcontextprotocol.io)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Support

For issues or questions:
1. Check the Aceternity UI documentation: https://ui.aceternity.com
2. Review the MCP specification: https://modelcontextprotocol.io
3. Open an issue in this repository
