// import { WFNode } from "./types";

// function bbox(n: WFNode) {
//   if (n.shape === "hex" || n.shape === "circle") {
//     const r = n.r!;
//     return { l: n.cx - r, r: n.cx + r, t: n.cy - r, b: n.cy + r, cx: n.cx, cy: n.cy };
//   }
//   const hw = (n.w || 180) / 2;
//   const hh = (n.h || 64) / 2;
//   return { l: n.cx - hw, r: n.cx + hw, t: n.cy - hh, b: n.cy + hh, cx: n.cx, cy: n.cy };
// }

// export function orthogonalPath(from: WFNode, to: WFNode, nodes: WFNode[] = []): string {
//   const A = bbox(from);
//   const B = bbox(to);
//   const dx = B.cx - A.cx;
//   const dy = B.cy - A.cy;
//   const absX = Math.abs(dx);
//   const absY = Math.abs(dy);
//   const ignoreIds = [from.id, to.id];

//   let x1: number;
//   let y1: number;
//   let x2: number;
//   let y2: number;
//   let path: string;

//   if (absY >= absX * 0.6) {
//     if (dy > 0) {
//       x1 = A.cx;
//       y1 = A.b;
//       x2 = B.cx;
//       y2 = B.t;
//     } else {
//       x1 = A.cx;
//       y1 = A.t;
//       x2 = B.cx;
//       y2 = B.b;
//     }

//     const candidates = buildVerticalBends(x1, y1, x2, y2, nodes, ignoreIds);
//     path = pickFirstClearPath(candidates, nodes, ignoreIds) ?? `M${x1},${y1} L${x1},${(y1 + y2) / 2} L${x2},${(y1 + y2) / 2} L${x2},${y2}`;
//   } else {
//     if (dx > 0) {
//       x1 = A.r;
//       y1 = A.cy;
//       x2 = B.l;
//       y2 = B.cy;
//     } else {
//       x1 = A.l;
//       y1 = A.cy;
//       x2 = B.r;
//       y2 = B.cy;
//     }

//     const candidates = buildHorizontalBends(x1, y1, x2, y2, nodes, ignoreIds);
//     path = pickFirstClearPath(candidates, nodes, ignoreIds) ?? `M${x1},${y1} L${(x1 + x2) / 2},${y1} L${(x1 + x2) / 2},${y2} L${x2},${y2}`;
//   }

//   return path;
// }

// export function hasBlockageBetween(
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number,
//   nodes: WFNode[],
//   ignoreIds: string[] = []
// ): boolean {
//   const minX = Math.min(x1, x2);
//   const maxX = Math.max(x1, x2);
//   const minY = Math.min(y1, y2);
//   const maxY = Math.max(y1, y2);
//   const isHorizontal = Math.abs(y1 - y2) < 2;
//   const isVertical = Math.abs(x1 - x2) < 2;

//   return nodes.some((node) => {
//     if (ignoreIds.includes(node.id)) return false;

//     const hw = (node.w || node.r! * 2) / 2;
//     const hh = (node.h || node.r! * 2) / 2;
//     const left = node.cx - hw;
//     const right = node.cx + hw;
//     const top = node.cy - hh;
//     const bottom = node.cy + hh;

//     if (isHorizontal) {
//       return y1 >= top && y1 <= bottom && minX < right && maxX > left;
//     }

//     if (isVertical) {
//       return x1 >= left && x1 <= right && minY < bottom && maxY > top;
//     }

//     return minX < right && maxX > left && minY < bottom && maxY > top;
//   });
// }

// type PathSegment = [number, number, number, number];

// function pickFirstClearPath(candidates: PathSegment[][], nodes: WFNode[], ignoreIds: string[]): string | null {
//   for (const candidate of candidates) {
//     if (!hasAnyBlockage(candidate, nodes, ignoreIds)) {
//       return segmentsToPath(candidate);
//     }
//   }
//   return null;
// }

// function segmentsToPath(segments: PathSegment[]): string {
//   const points = [
//     [segments[0][0], segments[0][1]],
//     ...segments.map(([, , x, y]) => [x, y]),
//   ] as Array<[number, number]>;

//   return points.map(([x, y], index) => (index === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
// }

// function hasAnyBlockage(segments: PathSegment[], nodes: WFNode[], ignoreIds: string[]): boolean {
//   return segments.some(([x1, y1, x2, y2]) => hasBlockageBetween(x1, y1, x2, y2, nodes, ignoreIds));
// }

// function buildVerticalBends(x1: number, y1: number, x2: number, y2: number, nodes: WFNode[], ignoreIds: string[]): PathSegment[][] {
//   const midY = (y1 + y2) / 2;
//   const gap = 18;
//   const blockers = nodes.filter((node) => !ignoreIds.includes(node.id)).filter((node) => intersectsVerticalCorridor(x1, x2, y1, y2, node));
//   const leftClearance = blockers.length ? Math.min(...blockers.map((node) => node.cx - nodeHalfWidth(node))) - gap : (x1 + x2) / 2 - gap;
//   const rightClearance = blockers.length ? Math.max(...blockers.map((node) => node.cx + nodeHalfWidth(node))) + gap : (x1 + x2) / 2 + gap;

//   return [
//     [[x1, y1, x1, midY], [x1, midY, x2, midY], [x2, midY, x2, y2]],
//     [[x1, y1, leftClearance, y1], [leftClearance, y1, leftClearance, y2], [leftClearance, y2, x2, y2]],
//     [[x1, y1, rightClearance, y1], [rightClearance, y1, rightClearance, y2], [rightClearance, y2, x2, y2]],
//   ];
// }

// function buildHorizontalBends(x1: number, y1: number, x2: number, y2: number, nodes: WFNode[], ignoreIds: string[]): PathSegment[][] {
//   const midX = (x1 + x2) / 2;
//   const gap = 18;
//   const blockers = nodes.filter((node) => !ignoreIds.includes(node.id)).filter((node) => intersectsHorizontalCorridor(x1, x2, y1, y2, node));
//   const topClearance = blockers.length ? Math.min(...blockers.map((node) => node.cy - nodeHalfHeight(node))) - gap : (y1 + y2) / 2 - gap;
//   const bottomClearance = blockers.length ? Math.max(...blockers.map((node) => node.cy + nodeHalfHeight(node))) + gap : (y1 + y2) / 2 + gap;

//   return [
//     [[x1, y1, midX, y1], [midX, y1, midX, y2], [midX, y2, x2, y2]],
//     [[x1, y1, x1, topClearance], [x1, topClearance, x2, topClearance], [x2, topClearance, x2, y2]],
//     [[x1, y1, x1, bottomClearance], [x1, bottomClearance, x2, bottomClearance], [x2, bottomClearance, x2, y2]],
//   ];
// }

// function nodeHalfWidth(node: WFNode): number {
//   return (node.w || (node.r ? node.r * 2 : 180)) / 2;
// }

// function nodeHalfHeight(node: WFNode): number {
//   return (node.h || (node.r ? node.r * 2 : 64)) / 2;
// }

// function intersectsVerticalCorridor(x1: number, x2: number, y1: number, y2: number, node: WFNode): boolean {
//   const halfW = nodeHalfWidth(node);
//   const halfH = nodeHalfHeight(node);
//   const left = node.cx - halfW;
//   const right = node.cx + halfW;
//   const top = node.cy - halfH;
//   const bottom = node.cy + halfH;
//   const minX = Math.min(x1, x2);
//   const maxX = Math.max(x1, x2);
//   const minY = Math.min(y1, y2);
//   const maxY = Math.max(y1, y2);

//   return minX < right && maxX > left && minY < bottom && maxY > top;
// }

// function intersectsHorizontalCorridor(x1: number, x2: number, y1: number, y2: number, node: WFNode): boolean {
//   return intersectsVerticalCorridor(x1, x2, y1, y2, node);
// }

// export function hexPoints(cx: number, cy: number, r: number): string {
//   return Array.from({ length: 6 }, (_, i) => {
//     const a = ((i * 60 - 30) * Math.PI) / 180;
//     return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
//   }).join(" ");
// }
