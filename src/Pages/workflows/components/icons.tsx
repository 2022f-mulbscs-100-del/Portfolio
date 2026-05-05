// /**
//  * NodeIcon — powered by react-icons
//  *
//  * Install (pick the ones your project uses):
//  *   npm install react-icons
//  *
//  * Icon packs used:
//  *   si  → Simple Icons  (brand logos: Slack, OpenAI, Google Sheets …)
//  *   lu  → Lucide        (clean UI icons: file, search, calendar …)
//  *   tb  → Tabler Icons  (extras: agent/robot, chain, switch …)
//  */

// import { SiSlack, SiOpenai, SiGooglesheets } from "react-icons/si";
// import {
//   LuGlobe,
//   LuFile,
//   LuPencil,
//   LuMail,
//   LuSearch,
//   LuCalendar,
//   LuDatabase,
//   LuArrowLeftRight,
//   LuLink,
//   LuBot,
//   LuStar,
// } from "react-icons/lu";

// /* ─── type → icon mapping ─────────────────────────────────── */

// const ICON_MAP: Record<string, React.ElementType> = {
//   // Brands
//   slack:    SiSlack,
//   openai:   SiOpenai,
//   sheets:   SiGooglesheets,

//   // UI / generic
//   http:     LuGlobe,
//   file:     LuFile,
//   edit:     LuPencil,
//   email:    LuMail,
//   search:   LuSearch,
//   calendar: LuCalendar,
//   memory:   LuDatabase,
//   switch:   LuArrowLeftRight,
//   chain:    LuLink,
//   agent:    LuBot,

//   // fallback
//   default:  LuStar,
// };

// /* ─── colour overrides for brand icons ───────────────────── */
// // Brand icons look best in their own colors; UI icons stay white.

// const BRAND_COLOR: Record<string, string> = {
//   slack:  "currentColor",   // SiSlack is monochrome; parent node provides color
//   openai: "white",
//   sheets: "#34A853",
// };

// /* ─── component ──────────────────────────────────────────── */

// interface NodeIconProps {
//   type: string;
//   size?: number;
// }

// function NodeIcon({ type, size = 22 }: NodeIconProps) {
//   const Icon = ICON_MAP[type] ?? ICON_MAP.default;
//   const color = BRAND_COLOR[type] ?? "white";

//   /**
//    * react-icons renders an <svg> element.
//    * We wrap it in a <g> that centers it at the SVG origin (0,0)
//    * because RenderNode uses  `translate(cx, cy)`  on the parent <g>.
//    *
//    * foreignObject lets us embed the React-rendered SVG icon
//    * cleanly inside the parent SVG coordinate space.
//    */
//   return (
//     <foreignObject
//       x={-size / 2}
//       y={-size / 2}
//       width={size}
//       height={size}
//       style={{ overflow: "visible" }}
//     >
//       {/* @ts-ignore — xmlns needed for SVG foreignObject */}
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         style={{
//           width: size,
//           height: size,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color,
//         }}
//       >
//         <Icon size={size} />
//       </div>
//     </foreignObject>
//   );
// }

// export default NodeIcon;