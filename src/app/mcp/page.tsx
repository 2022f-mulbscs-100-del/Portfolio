import MCPHeader from "@/Pages/mcp/MCPHeader";
import PageGlassWrapper from "../../components/PageGlassWrapper";

export default function MCPPage() {
  return (
    <PageGlassWrapper toneLabel="MCP In Progress">
      <main className="min-h-screen">
        <MCPHeader />
      </main>
    </PageGlassWrapper>
  );
}
