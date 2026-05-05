import { orthogonalPath } from "./geometry";
import { WFEdge, WFNode } from "./types";

interface RenderEdgeProps {
  edge: WFEdge;
  lit: boolean;
  nodes: WFNode[];
}

export default function RenderEdge({ edge, lit, nodes }: RenderEdgeProps) {
  const from = nodes.find((n) => n.id === edge.f);
  const to = nodes.find((n) => n.id === edge.t);
  if (!from || !to) return null;

  const d = edge.path ?? orthogonalPath(from, to, nodes);
  const isAux = edge.variant === "aux";

  return (
    <g>
      <path d={d} fill="none" stroke={lit ? "rgba(255,255,255,0.7)" : isAux ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.25)"} strokeWidth={lit ? 1.8 : isAux ? 0.85 : 1.1} strokeDasharray={isAux ? "4 7" : "none"} strokeLinecap="round" strokeLinejoin="round" markerEnd={lit ? "url(#arrLit)" : "url(#arr)"} style={{ transition: "stroke .3s" }} />
      {lit && <path d={d} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} strokeDasharray="5 26" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "flowDash .88s linear infinite" }} />}
    </g>
  );
}
