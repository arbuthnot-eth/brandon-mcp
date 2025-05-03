import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Define our MCP agent with tools
export class MyMCP extends McpAgent {
	server = new McpServer({
		name: "Brandon Arbuthnot Info Server",
		version: "1.0.0",
	});

	async init() {
		// Tools to provide professional information about Brandon Arbuthnot

		// Tool to get contact information
		this.server.tool(
			"getContactInfo",
			{}, // No input parameters needed
			async () => ({
				content: [{ type: "text", text: "Contact Brandon at [Your Email Address Here]" }], // Placeholder
			})
		);

		// Tool to get portfolio link
		this.server.tool(
			"getPortfolioLink",
			{}, // No input parameters needed
			async () => ({
				content: [{ type: "text", text: "Brandon's portfolio: [Your Portfolio URL Here]" }], // Placeholder
			})
		);

		// Tool to get resume link
		this.server.tool(
			"getResumeLink",
			{}, // No input parameters needed
			async () => ({
				content: [{ type: "text", text: "Brandon's resume: [Your Resume URL Here]" }], // Placeholder
			})
		);
	}
}

export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname === "/sse" || url.pathname === "/sse/message") {
			// @ts-ignore
			return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
		}

		if (url.pathname === "/mcp") {
			// @ts-ignore
			return MyMCP.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
};
