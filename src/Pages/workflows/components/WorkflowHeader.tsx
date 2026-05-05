import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface WorkflowHeaderProps {
  status: "idle" | "running" | "done";
  statusDot: string;
  doneCount: number;
  duration: string;
  nodeCount: number;
  running: boolean;
  onReset: () => void;
  onExecute: () => void;
}

export default function WorkflowHeader({ status, statusDot, doneCount, duration, nodeCount, running, onReset, onExecute }: WorkflowHeaderProps) {
  return (
    <div style={{ padding: "0.9rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: "-0.02em" }}>AI Assistant Workflow</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "2px 9px", background: "rgba(255,255,255,0.04)" }}>
            <span style={{ width: 5.5, height: 5.5, borderRadius: "50%", background: statusDot, display: "inline-block", animation: status === "running" ? "blink 0.9s infinite" : "none" }} />
            {status === "running" ? "running" : status === "done" ? "completed" : "idle"}
          </div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,.35)" }}>·</span>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)" }}>{nodeCount} nodes</span>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,.35)" }}>·</span>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)" }}>{doneCount > 0 ? `${doneCount} done` : duration !== "—" ? duration : "ready"}</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={onReset} style={{ fontSize: 11.5, fontWeight: 500, padding: "6px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>↺ Reset</button>
        <button onClick={running ? undefined : onExecute} disabled={running} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, fontWeight: 600, padding: "6px 16px", borderRadius: 8, border: "none", background: running ? "rgba(211,233,122,0.5)" : "#D3E97A", color: "#000", cursor: running ? "default" : "pointer", opacity: running ? 0.7 : 1, transition: "opacity 0.2s" }}>
          Execute Workflow
          <DotLottieReact style={{ width: 18, height: 18 }} src="https://lottie.host/e271cacd-9db9-4fbb-bd5f-884b270c12cf/8CtLA0y5Pw.lottie" loop autoplay />
        </button>
      </div>
    </div>
  );
}
