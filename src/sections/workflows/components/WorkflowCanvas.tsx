// import { EDGES, NODES } from "./data";
// import RenderEdge from "./RenderEdge";
// import RenderNode from "./RenderNode";
// import { NodeState, WFNode } from "./types";

// interface WorkflowCanvasProps {
//   litEdges: Set<string>;
//   nodeStates: Record<string, NodeState>;
//   nodeMsgs: Record<string, string>;
//   selectedNode: WFNode | null;
//   onSelectNode: (node: WFNode | null) => void;
// }

// export default function WorkflowCanvas({ litEdges, nodeStates, nodeMsgs, selectedNode, onSelectNode }: WorkflowCanvasProps) {
//   return (
//     <div style={{ flex: 1, overflowX: "auto", overflowY: "auto", padding: "1.25rem 1rem" }}>
//       <svg width={1160} height={1000} style={{ overflow: "visible", display: "block", minWidth: 1160 }}>
//         <defs>
//           <marker id="arr" markerWidth={7} markerHeight={7} refX={5.5} refY={3.5} orient="auto">
//             <path d="M0,1.2 L6,3.5 L0,5.8 z" fill="rgba(255,255,255,0.22)" />
//           </marker>
//           <marker id="arrLit" markerWidth={7} markerHeight={7} refX={5.5} refY={3.5} orient="auto">
//             <path d="M0,1.2 L6,3.5 L0,5.8 z" fill="rgba(255,255,255,0.8)" />
//           </marker>
//         </defs>

//         <text x={75} y={190} fontSize={8.5} fontWeight={600} fill="rgba(255,255,255,0.2)" letterSpacing={1}>FILE BRANCH</text>
//         <text x={680} y={190} fontSize={8.5} fontWeight={600} fill="rgba(255,255,255,0.2)" letterSpacing={1}>TEXT BRANCH</text>
//         <text x={510} y={448} fontSize={8.5} fontWeight={600} fill="rgba(255,255,255,0.2)" letterSpacing={1} textAnchor="middle">AGENT TOOLS</text>
//         <text x={960} y={190} fontSize={8.5} fontWeight={600} fill="rgba(255,255,255,0.2)" letterSpacing={1} textAnchor="middle">OUTPUT</text>

//         {EDGES.map((e) => (
//           <RenderEdge key={`${e.f}-${e.t}`} edge={e} lit={litEdges.has(`${e.f}-${e.t}`)} nodes={NODES} />
//         ))}

//         {NODES.map((n) => (
//           <RenderNode
//             key={n.id}
//             n={n}
//             state={nodeStates[n.id]}
//             msg={nodeMsgs[n.id]}
//             selected={selectedNode?.id === n.id}
//             onClick={() => onSelectNode(selectedNode?.id === n.id ? null : n)}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }
