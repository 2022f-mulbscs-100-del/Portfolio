// import { hexPoints } from "./geometry";
// import NodeIcon from "./icons";
// import { NodeState, WFNode } from "./types";

// interface RenderNodeProps {
//   n: WFNode;
//   state: NodeState;
//   msg: string;
//   selected: boolean;
//   onClick: () => void;
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 🎨 STATUS SYSTEM */
// /* ───────────────────────────────────────────────────────────── */

// const STATUS = {
//   stroke: (active: boolean, done: boolean, error: boolean, selected: boolean) =>
//     error
//       ? "#ef4444"
//       : active
//       ? "rgba(255,255,255,0.75)"
//       : done
//       ? "#86EFAC"
//       : selected
//       ? "rgba(255,255,255,0.45)"
//       : "rgba(255,255,255,0.18)",

//   subText: (active: boolean, done: boolean, error: boolean) =>
//     error
//       ? "rgba(239,68,68,.9)"
//       : done
//       ? "rgba(134,239,172,.9)"
//       : active
//       ? "rgba(251,191,36,.9)"
//       : "rgba(255,255,255,.5)",

//   subLabel: (active: boolean, done: boolean, error: boolean, msg: string, sub?: string) =>
//     error
//       ? `✕ ${msg || "Error"}`
//       : done
//       ? `✓ ${msg}`
//       : active
//       ? `● ${msg}`
//       : sub ?? "",
// };

// /* ───────────────────────────────────────────────────────────── */
// /* ✨ SVG DEFS (Glass + Glow + Inner Shadow) */
// /* ───────────────────────────────────────────────────────────── */

// export function NodeDefs() {
//   return (
//     <defs>
//       <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
//         <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
//       </linearGradient>

//       <filter id="nf-glow" x="-40%" y="-40%" width="180%" height="180%">
//         <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
//         <feMerge>
//           <feMergeNode in="blur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>

//       <filter id="nf-inner" x="-50%" y="-50%" width="200%" height="200%">
//         <feOffset dy="1" />
//         <feGaussianBlur stdDeviation="2" result="blur" />
//         <feComposite operator="out" in="SourceGraphic" in2="blur" />
//         <feColorMatrix
//           type="matrix"
//           values="0 0 0 0 0
//                   0 0 0 0 0
//                   0 0 0 0 0
//                   0 0 0 .25 0"
//         />
//         <feBlend in="SourceGraphic" mode="normal" />
//       </filter>
//     </defs>
//   );
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 🎯 COMMON WRAPPER */
// /* ───────────────────────────────────────────────────────────── */

// function NodeWrapper({ children, n, onClick, isActive }: any) {
//   const isRect = n.shape === "rect" || (!n.shape && n.w);

//   const width = n.w || n.r * 4;
//   const height = n.h || n.r * 4;

//   const x = isRect ? n.cx - n.w / 2 : n.cx - width / 2;
//   const y = isRect ? n.cy - n.h / 2 : n.cy - height / 2;

//   return (
//     <g onClick={onClick} style={{ cursor: "pointer" }}>
//       {/* 🟦 PERFECT HITBOX */}
//       <rect
//         x={x}
//         y={y}
//         width={width}
//         height={height}
//         fill="transparent"
//       />

//       {/* animation layer */}
//       <g
//         style={{
//           transformOrigin: `${n.cx}px ${n.cy}px`,
//           animation: isActive ? "nodeFloat 2.2s ease-in-out infinite" : "none",
//         }}
//       >
//         {children}
//       </g>
//     </g>
//   );
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 📐 HELPERS */
// /* ───────────────────────────────────────────────────────────── */

// /**
//  * Clamp a label to fit within `maxWidth` pixels using SVG textLength.
//  * Returns props to spread onto a <text> element.
//  */
// function fitTextProps(label: string, maxWidth: number, fontSize: number = 11) {
//   // ~6px per char at font-size 11, scale with fontSize
//   const estimatedWidth = label.length * fontSize * 0.55;
//   if (estimatedWidth <= maxWidth) return {};
//   return {
//     textLength: maxWidth,
//     lengthAdjust: "spacingAndGlyphs" as const,
//   };
// }

// /**
//  * Truncate a string to fit within `maxChars`, adding ellipsis if needed.
//  */
// function truncate(text: string, maxChars: number): string {
//   if (!text) return "";
//   return text.length > maxChars ? text.slice(0, maxChars - 1) + "…" : text;
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 🔷 HEX NODE */
// /* ───────────────────────────────────────────────────────────── */

// function HexNode(props: RenderNodeProps) {
//   const { n, state, msg, selected, onClick } = props;
//   const isActive = state === "active";
//   const isDone = state === "done";
//   const isError = state === "error";

//   const pts = hexPoints(n.cx, n.cy, n.r!);
//   const strokeCol = STATUS.stroke(isActive, isDone, isError, selected);
//   const subCol = STATUS.subText(isActive, isDone, isError);
//   const subLabel = STATUS.subLabel(isActive, isDone, isError, msg, n.sub);

//   // Max label width = inner hex width ≈ r * 1.6 (flat-top hex inscribed width)
//   const maxLabelWidth = n.r! * 1.6;

//   return (
//     <NodeWrapper n={n} onClick={onClick}>
//       {isActive && (
//         <polygon
//           points={pts}
//           fill="none"
//           stroke={n.iconBg}
//           strokeWidth={10}
//           opacity={0.15}
//           filter="url(#nf-glow)"
//         />
//       )}

//       <polygon points={pts} fill="url(#nodeGrad)" filter="url(#nf-inner)" />

//       <polygon
//         points={pts}
//         fill="none"
//         stroke={strokeCol}
//         strokeWidth={isActive ? 1.6 : 1}
//       />

//       <g transform={`translate(${n.cx},${n.cy})`}>
//         <NodeIcon type={n.iconType} size={n.r! * 0.7} />
//       </g>

//       {isActive && (
//         <polygon
//           points={pts}
//           fill="none"
//           stroke="rgba(255,255,255,0.2)"
//           strokeWidth={3}
//           style={{ animation: "nodePulse 1.6s infinite" }}
//         />
//       )}

//       {/* Label — constrained to hex width */}
//       <text
//         x={n.cx}
//         y={n.cy + n.r! + 18}
//         textAnchor="middle"
//         fontSize={11}
//         fontWeight={700}
//         fill="white"
//         {...fitTextProps(n.label, maxLabelWidth, 11)}
//       >
//         {n.label}
//       </text>

//       {/* Sub-label — truncated if needed */}
//       <text
//         x={n.cx}
//         y={n.cy + n.r! + 30}
//         textAnchor="middle"
//         fontSize={9.5}
//         fill={subCol}
//         {...fitTextProps(subLabel, maxLabelWidth, 9.5)}
//       >
//         {truncate(subLabel, 22)}
//       </text>
//     </NodeWrapper>
//   );
// }

// /* ───────────────────────────────────────────────────────────── */
// /* ⚪ CIRCLE NODE */
// /* ───────────────────────────────────────────────────────────── */

// function CircleNode(props: RenderNodeProps) {
//   const { n, state, msg, selected, onClick } = props;
//   const r = n.r!;

//   const isActive = state === "active";
//   const isDone = state === "done";
//   const isError = state === "error";

//   const strokeCol = STATUS.stroke(isActive, isDone, isError, selected);
//   const subCol = STATUS.subText(isActive, isDone, isError);
//   const subLabel = STATUS.subLabel(isActive, isDone, isError, msg, n.sub);

//   // Max label width = diameter
//   const maxLabelWidth = r * 2;

//   return (
//     <NodeWrapper n={n} onClick={onClick}>
//       {isActive && (
//         <circle
//           cx={n.cx}
//           cy={n.cy}
//           r={r + 2}
//           stroke={n.iconBg}
//           strokeWidth={10}
//           opacity={0.15}
//           filter="url(#nf-glow)"
//         />
//       )}

//       <circle
//         cx={n.cx}
//         cy={n.cy}
//         r={r}
//         fill="url(#nodeGrad)"
//         filter="url(#nf-inner)"
//         stroke={strokeCol}
//       />

//       <g transform={`translate(${n.cx},${n.cy})`}>
//         <NodeIcon type={n.iconType} size={r * 0.7} />
//       </g>

//       {isActive && (
//         <circle
//           cx={n.cx}
//           cy={n.cy}
//           r={r}
//           fill="none"
//           stroke="rgba(255,255,255,0.2)"
//           strokeWidth={3}
//           style={{ animation: "nodePulse 1.6s infinite" }}
//         />
//       )}

//       {/* Label — constrained to circle diameter */}
//       <text
//         x={n.cx}
//         y={n.cy + r + 18}
//         textAnchor="middle"
//         fontSize={11}
//         fontWeight={700}
//         fill="white"
//         {...fitTextProps(n.label, maxLabelWidth, 11)}
//       >
//         {n.label}
//       </text>

//       {/* Sub-label */}
//       <text
//         x={n.cx}
//         y={n.cy + r + 30}
//         textAnchor="middle"
//         fontSize={9}
//         fill={subCol}
//         {...fitTextProps(subLabel, maxLabelWidth, 9)}
//       >
//         {truncate(subLabel, 20)}
//       </text>
//     </NodeWrapper>
//   );
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 🟪 RECT NODE */
// /* ───────────────────────────────────────────────────────────── */

// function RectNode(props: RenderNodeProps) {
//   const { n, state, msg, selected, onClick } = props;

//   const isActive = state === "active";
//   const isDone = state === "done";
//   const isError = state === "error";

//   const x = n.cx - n.w! / 2;
//   const y = n.cy - n.h! / 2;

//   const strokeCol = STATUS.stroke(isActive, isDone, isError, selected);
//   const subCol = STATUS.subText(isActive, isDone, isError);
//   const subLabel = STATUS.subLabel(isActive, isDone, isError, msg, n.sub);

//   // Icon occupies left ~50px, text zone starts at x+50 with 8px padding
//   const iconZoneWidth = 50;
//   const textX = x + iconZoneWidth + 8;
//   // Available text width = total width minus icon zone, left pad, right pad
//   const textMaxWidth = n.w! - iconZoneWidth - 16;

//   return (
//     <NodeWrapper n={n} onClick={onClick}>
//       <rect
//         x={x}
//         y={y}
//         width={n.w!}
//         height={n.h!}
//         rx={10}
//         fill="url(#nodeGrad)"
//         filter="url(#nf-inner)"
//         stroke={strokeCol}
//       />

//       {/* Icon: centered vertically in the left zone */}
//       <g transform={`translate(${x + iconZoneWidth / 2},${n.cy})`}>
//         <NodeIcon type={n.iconType} size={18} />
//       </g>

//       {/* Title: vertically centered in upper half of rect */}
//       <text
//         x={textX}
//         y={y + n.h! * 0.38}
//         dominantBaseline="central"
//         fontSize={12}
//         fontWeight={700}
//         fill="white"
//         {...fitTextProps(n.label, textMaxWidth, 12)}
//       >
//         {truncate(n.label, Math.floor(textMaxWidth / 7))}
//       </text>

//       {/* Sub-label: vertically centered in lower half of rect */}
//       {subLabel ? (
//         <text
//           x={textX}
//           y={y + n.h! * 0.68}
//           dominantBaseline="central"
//           fontSize={10}
//           fill={subCol}
//           {...fitTextProps(subLabel, textMaxWidth, 10)}
//         >
//           {truncate(subLabel, Math.floor(textMaxWidth / 6))}
//         </text>
//       ) : null}
//     </NodeWrapper>
//   );
// }

// /* ───────────────────────────────────────────────────────────── */
// /* 🚀 ROUTER */
// /* ───────────────────────────────────────────────────────────── */

// export default function RenderNode(props: RenderNodeProps) {
//   switch (props.n.shape) {
//     case "hex":
//       return <HexNode {...props} />;
//     case "circle":
//       return <CircleNode {...props} />;
//     default:
//       return <RectNode {...props} />;
//   }
// }