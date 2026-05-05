// import type { RefObject } from "react";
// import NodeIcon from "./icons";
// import { LogEntry, WFNode } from "./types";

// interface WorkflowSidebarProps {
//   stats: { done: number; dur: string; err: number };
//   doneCount: number;
//   nodeCount: number;
//   selectedNode: WFNode | null;
//   logs: LogEntry[];
//   logRef: RefObject<HTMLDivElement | null>;
// }

// export default function WorkflowSidebar({ stats, doneCount, nodeCount, selectedNode, logs, logRef }: WorkflowSidebarProps) {
//   return (
//     <div style={{ width: 230, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.2rem", overflowY: "auto" }}>
//       <div>
//         <p style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.32)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Stats</p>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
//           {[{ val: `${stats.done}/${nodeCount}`, lbl: "done" }, { val: stats.dur, lbl: "duration" }, { val: doneCount, lbl: "success" }, { val: stats.err, lbl: "errors" }].map(({ val, lbl }) => (
//             <div key={lbl} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 9, padding: "10px 11px", border: "1px solid rgba(255,255,255,0.08)" }}>
//               <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>{val}</div>
//               <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.38)", marginTop: 2 }}>{lbl}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <p style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.32)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Node Detail</p>
//         <div style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
//           {selectedNode ? (
//             <>
//               <div style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.04)" }}>
//                 <div style={{ width: 28, height: 28, borderRadius: 7, background: selectedNode.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   <svg width={18} height={18} viewBox="-9 -9 18 18">
//                     <NodeIcon type={selectedNode.iconType} size={16} />
//                   </svg>
//                 </div>
//                 <div>
//                   <div style={{ fontSize: 11.5, fontWeight: 600 }}>{selectedNode.label}</div>
//                   <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{selectedNode.sub}</div>
//                 </div>
//               </div>
//               {Object.entries(selectedNode.details).map(([k, v], i, arr) => (
//                 <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 12px", fontSize: 10.5, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: "rgba(255,255,255,0.02)" }}>
//                   <span style={{ color: "rgba(255,255,255,0.38)" }}>{k}</span>
//                   <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 500 }}>{v}</span>
//                 </div>
//               ))}
//             </>
//           ) : (
//             <div style={{ padding: "1.2rem", textAlign: "center", fontSize: 10.5, color: "rgba(255,255,255,0.25)" }}>Click a node to inspect</div>
//           )}
//         </div>
//       </div>

//       <div>
//         <p style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.32)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Execution Log</p>
//         <div style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
//           <div ref={logRef} className="wf-log" style={{ padding: "8px 10px", maxHeight: 220, overflowY: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
//             {logs.map((l, i) => (
//               <div key={i} style={{ display: "flex", gap: 7, fontSize: 10, lineHeight: 1.55 }}>
//                 <span style={{ color: "rgba(255,255,255,0.22)", flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{l.time}</span>
//                 <span style={{ color: l.type === "ok" ? "#86EFAC" : l.type === "err" ? "#FCA5A5" : l.type === "warn" ? "#FCD34D" : "rgba(255,255,255,0.48)" }}>{l.msg}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
