// "use client";

// import { useState, useRef, useCallback, useEffect } from "react";
// import { NODES } from "./data";
// import WorkflowCanvas from "./WorkflowCanvas";
// import WorkflowHeader from "./WorkflowHeader";
// import WorkflowSidebar from "./WorkflowSidebar";
// import { LogEntry, NodeState, WFNode } from "./types";

// function nowTime() {
//   return new Date().toTimeString().slice(0, 8);
// }

// const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// export default function WorkflowApp() {
//   const [nodeStates, setNodeStates] = useState<Record<string, NodeState>>(() => Object.fromEntries(NODES.map((n) => [n.id, "idle"])));
//   const [nodeMsgs, setNodeMsgs] = useState<Record<string, string>>(() => Object.fromEntries(NODES.map((n) => [n.id, "—"])));
//   const [litEdges, setLitEdges] = useState<Set<string>>(new Set());
//   const [logs, setLogs] = useState<LogEntry[]>([{ time: "--:--:--", msg: "Ready. Press execute.", type: "info" }]);
//   const [running, setRunning] = useState(false);
//   const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
//   const [selectedNode, setSelectedNode] = useState<WFNode | null>(null);
//   const [stats, setStats] = useState({ done: 0, dur: "—", err: 0 });

//   const startTs = useRef<number | null>(null);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const logRef = useRef<HTMLDivElement>(null);

//   const addLog = useCallback((msg: string, type: LogEntry["type"] = "info") => {
//     setLogs((previous) => [...previous, { time: nowTime(), msg, type }]);
//   }, []);

//   const setNode = useCallback((id: string, state: NodeState, msg: string) => {
//     setNodeStates((previous) => ({ ...previous, [id]: state }));
//     setNodeMsgs((previous) => ({ ...previous, [id]: msg }));
//   }, []);

//   const litEdge = useCallback((from: string, to: string) => setLitEdges((previous) => new Set([...previous, `${from}-${to}`])), []);

//   useEffect(() => {
//     if (logRef.current) {
//       logRef.current.scrollTop = logRef.current.scrollHeight;
//     }
//   }, [logs]);

//   const updateStats = useCallback(() => {
//     setNodeStates((snapshot) => {
//       const done = Object.values(snapshot).filter((value) => value === "done").length;
//       const err = Object.values(snapshot).filter((value) => value === "error").length;
//       const elapsed = startTs.current ? Date.now() - startTs.current : 0;
//       setStats({ done, dur: elapsed < 1000 ? `${elapsed}ms` : `${(elapsed / 1000).toFixed(1)}s`, err });
//       return snapshot;
//     });
//   }, []);

//   const startRun = useCallback(async () => {
//     if (running) return;

//     setRunning(true);
//     setStatus("running");
//     startTs.current = Date.now();
//     timerRef.current = setInterval(updateStats, 100);
//     addLog("Workflow triggered", "info");

//     setNode("slack-trigger", "active", "listening…");
//     addLog("Slack: event received", "info");
//     await sleep(700);
//     setNode("slack-trigger", "done", "fired");
//     litEdge("slack-trigger", "switch");
//     addLog("Slack Trigger → fired", "ok");

//     await sleep(200);
//     setNode("switch", "active", "routing…");
//     addLog("Switch: evaluating rules", "info");
//     await sleep(600);
//     setNode("switch", "done", "split");
//     litEdge("switch", "get-a-file");
//     litEdge("switch", "edit-fields");
//     litEdge("switch", "send-message");
//     addLog("Switch → routed branches", "ok");

//     await sleep(200);
//     setNode("edit-fields", "active", "editing…");
//     await sleep(500);
//     setNode("edit-fields", "done", "ready");
//     litEdge("edit-fields", "ai-agent");
//     addLog("Edit Fields → payload ready", "ok");

//     await sleep(200);
//     setNode("get-a-file", "active", "loading…");
//     addLog("Get File: fetching attachment", "info");
//     await sleep(350);
//     setNode("get-a-file", "done", "received");
//     litEdge("get-a-file", "http-request1");
//     addLog("Get File → received", "ok");

//     await sleep(200);
//     setNode("http-request1", "active", "fetching…");
//     await sleep(350);
//     setNode("http-request1", "done", "200 OK");
//     litEdge("http-request1", "http-request");
//     addLog("HTTP Request → 200 OK", "ok");

//     await sleep(200);
//     setNode("http-request", "active", "posting…");
//     addLog("HTTP Request: calling Groq", "info");
//     await sleep(500);
//     setNode("http-request", "done", "sent");
//     litEdge("http-request", "ai-agent");
//     addLog("HTTP Request → complete", "ok");

//     await sleep(300);
//     setNode("ai-agent", "active", "orchestrating…");
//     addLog("AI Agent: engaging tools", "info");
//     await sleep(300);

//     const tools = ["openai-chat-model", "simple-memory", "google-sheets-row", "email-agent", "research-agent", "calendar-agent"];
//     tools.forEach((id) => {
//       setNode(id, "active", "running…");
//       litEdge("ai-agent", id);
//     });
//     litEdge("ai-agent", "send-message");
//     addLog("AI Agent → 6 tools engaged", "ok");
//     await sleep(750);

//     setNode("ai-agent", "done", "complete");
//     tools.forEach((id, index) => setTimeout(() => setNode(id, "done", "done"), index * 70));
//     addLog("AI Agent → outputs ready", "ok");

//     await sleep(200);
//     setNode("send-message", "active", "posting…");
//     await sleep(350);
//     setNode("send-message", "done", "delivered");
//     addLog("Send Message → delivered", "ok");

//     if (timerRef.current) clearInterval(timerRef.current);
//     updateStats();
//     addLog(`✓ Done in ${((Date.now() - startTs.current!) / 1000).toFixed(2)}s`, "ok");
//     setStatus("done");
//     setRunning(false);
//   }, [running, addLog, setNode, litEdge, updateStats]);

//   const resetAll = useCallback(() => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     startTs.current = null;
//     NODES.forEach((node) => setNode(node.id, "idle", "—"));
//     setLitEdges(new Set());
//     setLogs([{ time: "--:--:--", msg: "Reset. Ready to run.", type: "info" }]);
//     setStats({ done: 0, dur: "—", err: 0 });
//     setStatus("idle");
//     setRunning(false);
//     setSelectedNode(null);
//   }, [setNode]);

//   const doneCount = Object.values(nodeStates).filter((state) => state === "done").length;
//   const statusDot = status === "running" ? "#F59E0B" : status === "done" ? "#86EFAC" : "rgba(255,255,255,0.22)";

//   return (
//     <>
//       {/* <style>{`
//         @keyframes flowDash { to { stroke-dashoffset:-31; } }
//         @keyframes nodePulse { 0%,100%{opacity:.2;} 50%{opacity:.65;} }
//         @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:.15;} }
//         .wf-log::-webkit-scrollbar{width:3px;}
//         .wf-log::-webkit-scrollbar-track{background:transparent;}
//         .wf-log::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:2px;}
//       `}</style> */}
//       <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: "#fff" }}>
//         <WorkflowHeader
//           status={status}
//           statusDot={statusDot}
//           doneCount={doneCount}
//           duration={stats.dur}
//           nodeCount={NODES.length}
//           running={running}
//           onReset={resetAll}
//           onExecute={startRun}
//         />

//         <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
//           <WorkflowCanvas
//             litEdges={litEdges}
//             nodeStates={nodeStates}
//             nodeMsgs={nodeMsgs}
//             selectedNode={selectedNode}
//             onSelectNode={setSelectedNode}
//           />

//           {/* <WorkflowSidebar
//             stats={stats}
//             doneCount={doneCount}
//             nodeCount={NODES.length}
//             selectedNode={selectedNode}
//             logs={logs}
//             logRef={logRef}
//           /> */}
//         </div>
//       </div>
//     </>
//   );
// }
