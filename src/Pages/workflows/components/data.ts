import { WFEdge, WFNode } from "./types";

function manualPath(...points: Array<[number, number]>): string {
	return points.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x},${y}`).join(" ");
}

export const NODES: WFNode[] = [
	{ id: "slack-trigger", cx: 510, cy: 80, r: 52, shape: "hex", label: "slack", sub: "trigger", iconType: "slack", iconBg: "#4A154B", details: { app: "Slack", trigger: "message", channel: "#ops", event: "new message" } },
	{ id: "switch", cx: 510, cy: 210, w: 180, h: 60, shape: "rect", label: "switch", sub: "rules", iconType: "switch", iconBg: "#D97706", details: { mode: "Rules", voice: "route", text: "route", fallback: "default" } },
	{ id: "get-a-file", cx: 330, cy: 210, w: 150, h: 60, shape: "rect", label: "get file slack", sub: "attachment", iconType: "file", iconBg: "#0EA5E9", details: { app: "Slack", action: "get file", file: "attached", cache: "off" } },
	{ id: "http-request1", cx: 150, cy: 210, w: 150, h: 60, shape: "rect", label: "http req", sub: "GET /files", iconType: "http", iconBg: "#7C3AED", details: { method: "GET", endpoint: "/files", auth: "none", retry: "1" } },
	{ id: "edit-fields", cx: 710, cy: 210, w: 150, h: 60, shape: "rect", label: "edit field", sub: "manual payload", iconType: "edit", iconBg: "#6366F1", details: { input: "manual", mode: "edit", fields: "payload", format: "json" } },
	{ id: "http-request", cx: 150, cy: 350, w: 150, h: 60, shape: "rect", label: "http req", sub: "POST groq", iconType: "http", iconBg: "#7C3AED", details: { method: "POST", endpoint: "api.groq.com", auth: "bearer", body: "json" } },
	{ id: "ai-agent", cx: 510, cy: 330, w: 440, h: 75, shape: "wide", label: "ai agent", sub: "orchestrator", iconType: "agent", iconBg: "#16A34A", details: { type: "agent", model: "chat", memory: "on", tools: "6" } },
	{ id: "send-message", cx: 960, cy: 440, r: 52, shape: "hex", label: "slack", sub: "post", iconType: "slack", iconBg: "#4A154B", details: { app: "Slack", action: "send message", channel: "#ops", format: "text" } },
	{ id: "openai-chat-model", cx: 100, cy: 490, r: 48, shape: "circle", label: "ai", sub: "model", iconType: "openai", iconBg: "#10A37F", details: { provider: "OpenAI", role: "model", temperature: "0.2", version: "chat" } },
	{ id: "simple-memory", cx: 190, cy: 590, r: 48, shape: "circle", label: "memory", sub: "session", iconType: "memory", iconBg: "#F59E0B", details: { type: "memory", storage: "simple", ttl: "session", scope: "agent" } },
	{ id: "google-sheets-row", cx: 560, cy: 450, r: 48, shape: "circle", label: "sheet", sub: "read rows", iconType: "sheets", iconBg: "#34A853", details: { app: "Google Sheets", action: "read rows", mode: "row(s)", auth: "oauth" } },
	{ id: "email-agent", cx: 560, cy: 590, r: 48, shape: "circle", label: "email agent", sub: "tool", iconType: "email", iconBg: "#EA4335", details: { type: "tool", app: "Email", action: "send", transport: "smtp" } },
	{ id: "calendar-agent", cx: 560, cy: 740, r: 48, shape: "circle", label: "calendar agent", sub: "tool", iconType: "calendar", iconBg: "#4285F4", details: { type: "tool", app: "Calendar", action: "schedule", source: "google" } },
	{ id: "research-agent", cx: 560, cy: 880, r: 48, shape: "circle", label: "research agent", sub: "tool", iconType: "search", iconBg: "#3B82F6", details: { type: "tool", app: "Research", action: "search", source: "web" } },
];

export const EDGES: WFEdge[] = [
	{ f: "slack-trigger", t: "switch", path: manualPath([510, 132], [510, 180]) },
	{ f: "switch", t: "get-a-file", path: manualPath([420, 210], [405, 210]) },
	{ f: "switch", t: "edit-fields", path: manualPath([600, 210], [710, 210]) },
	{ f: "get-a-file", t: "http-request1", path: manualPath([255, 210], [225, 210]) },
	{ f: "http-request1", t: "http-request", path: manualPath([150, 240], [150, 320]) },
	{ f: "http-request", t: "ai-agent", path: manualPath([225, 350], [290, 350]) },
	{ f: "edit-fields", t: "ai-agent", path: manualPath([785, 210], [785, 290], [510, 290], [510, 330]) },
	{ f: "ai-agent", t: "openai-chat-model", path: manualPath([430, 367], [430, 490], [148, 490]) },
	{ f: "ai-agent", t: "simple-memory", path: manualPath([430, 367], [430, 590], [238, 590]) },
	{ f: "ai-agent", t: "google-sheets-row", path: manualPath([430, 367], [430, 450], [512, 450]) },
	{ f: "ai-agent", t: "email-agent", path: manualPath([430, 367], [430, 590], [512, 590]) },
	{ f: "ai-agent", t: "calendar-agent", path: manualPath([430, 367], [430, 740], [512, 740]) },
	{ f: "ai-agent", t: "research-agent", path: manualPath([430, 367], [430, 880], [512, 880]) },
	{ f: "ai-agent", t: "send-message", path: manualPath([730, 355], [860, 355], [860, 440], [908, 440]) },
];
