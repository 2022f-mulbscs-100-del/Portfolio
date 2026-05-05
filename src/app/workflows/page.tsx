
import Workflows from "@/Pages/workflows/workflows";
import PageGlassWrapper from "../../components/PageGlassWrapper";

export default function WorkflowsPage() {
  return (
    // <PageGlassWrapper toneLabel="Workflow In Progress">
      <main className="min-h-screen">
        <Workflows />
      </main>
    // </PageGlassWrapper>
  );
}
