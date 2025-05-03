# Brandon Arbuthnot
# Developer Information MCP Server

This repository contains the code for an MCP (Model Context Protocol) server designed to provide professional information about Brandon Arbuthnot, a developer. This server acts as a structured interface to access contact details, portfolio links, and resume information via MCP-compatible clients.

## Purpose

The primary goal of this server is to make it easy for others to programmatically access key professional details about Brandon Arbuthnot. It serves as a demonstration of using the Model Context Protocol to expose structured information.

## Available Tools

This MCP server provides the following tools:

*   **`getContactInfo`**: Retrieves Brandon Arbuthnot's preferred professional contact method (e.g., email address).
    *   *Input:* None
    *   *Output:* Text containing contact information.
*   **`getPortfolioLink`**: Retrieves the URL for Brandon Arbuthnot's online portfolio.
    *   *Input:* None
    *   *Output:* Text containing the portfolio URL.
*   **`getResumeLink`**: Retrieves a link to Brandon Arbuthnot's resume.
    *   *Input:* None
    *   *Output:* Text containing the resume link.

*(Note: The implementation of these tools in `src/index.ts` currently provides placeholder information. You will need to update the `src/index.ts` file with actual contact details and links.)*

## Deployment

This server is designed to be deployed on Cloudflare Workers.

[![Deploy to Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/arbuthnot-eth/brandon-mcp)

This will deploy your MCP server to a URL like: `brandon-arbuthnot-info-server.<your-account>.workers.dev/sse`

Alternatively, you can use the command line below to get the remote MCP Server created on your local machine:

```bash
npm create cloudflare@latest -- brandon-mcp --template=https://github.com/arbuthnot-eth/brandon-mcp
```

*(Note: The template URL above assumes this repository is hosted at `https://github.com/arbuthnot-eth/brandon-mcp`. Update this URL if the repository location is different.)*

## Connecting to the Server

You can connect to this MCP server from various MCP-compatible clients.

### Cloudflare AI Playground

You can connect to your deployed MCP server from the Cloudflare AI Playground:

1.  Go to https://playground.ai.cloudflare.com/
2.  Enter your deployed MCP server URL (e.g., `brandon-arbuthnot-info-server.<your-account>.workers.dev/sse`)
3.  You can now use the `getContactInfo`, `getPortfolioLink`, and `getResumeLink` tools directly from the playground!

### Claude Desktop

You can also connect to your remote MCP server from local MCP clients, by using the [mcp-remote proxy](https://www.npmjs.com/package/mcp-remote).

To connect to your MCP server from Claude Desktop, follow [Anthropic's Quickstart](https://modelcontextprotocol.io/quickstart/user) and within Claude Desktop go to Settings > Developer > Edit Config.

Update with this configuration:

```json
{
  "mcpServers": {
    "brandonInfo": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://localhost:8787/sse"  // or brandon-arbuthnot-info-server.your-account.workers.dev/sse
      ]
    }
  }
}
```

Restart Claude and you should see the tools become available under the name `brandonInfo`.

## Customization

To update the actual contact information and links provided by the tools, edit the `src/index.ts` file and replace the placeholder text within the tool definitions.
