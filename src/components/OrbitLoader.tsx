import type { CSSProperties } from 'react';

type Props = {
  /** Core diameter in px */
  size?: number;
  /** RGB triplet, your lime #d9ef8a -> "217,239,138" */
  lime?: string;
  /** RGB triplet for the soft glow behind the core */
  purple?: string;
  /** Cover the whole screen on a dark background (for page loading) */
  fullscreen?: boolean;
  /** Optional small text under the core */
  label?: string;
  /** Number of soft dots around the core (0 to disable) */
  dots?: number;
  className?: string;
};

const css = `
.ol-root{position:relative;width:var(--ol-s);height:var(--ol-s);display:grid;place-items:center}
.ol-glow{position:absolute;inset:-70%;border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(var(--ol-p),.38),rgba(var(--ol-p),.1) 45%,transparent 68%);
  animation:ol-breathe 3s ease-in-out infinite}
.ol-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(var(--ol-l),.4);opacity:0;
  animation:ol-pulse 2.4s ease-out infinite}
.ol-ring:nth-of-type(2){animation-delay:1.2s}
.ol-spin{position:absolute;inset:-16%;border-radius:50%;border:2px solid transparent;
  border-top-color:rgba(var(--ol-l),.95);border-right-color:rgba(var(--ol-l),.25);
  animation:ol-rot 1.1s linear infinite}
.ol-core{position:relative;width:100%;height:100%;border-radius:50%;display:grid;place-items:center;
  background:radial-gradient(circle at 35% 30%,rgb(52,52,70),rgb(18,18,26) 60%,rgb(8,8,12));
  border:1.5px solid rgba(var(--ol-l),.9);box-shadow:0 0 28px rgba(var(--ol-l),.35);
  color:rgb(var(--ol-l));font:600 calc(var(--ol-s) * .3)/1 ui-monospace,Menlo,Consolas,monospace;
  animation:ol-core 2.4s ease-in-out infinite}
.ol-label{margin-top:calc(var(--ol-s) * .55);font:500 12px/1 system-ui,sans-serif;letter-spacing:.35em;
  text-transform:uppercase;color:rgba(255,255,255,.5)}
.ol-dots{position:absolute;inset:0;pointer-events:none;animation:ol-drift 90s linear infinite}
.ol-dot{position:absolute;left:var(--x);top:var(--y);width:var(--z);height:var(--z);
  margin:calc(var(--z) / -2) 0 0 calc(var(--z) / -2);border-radius:50%;background:#fff;opacity:.6;
  animation:ol-twinkle var(--d) ease-in-out var(--t) infinite}
.ol-full{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a0a0a}
@keyframes ol-rot{to{transform:rotate(360deg)}}
@keyframes ol-drift{to{transform:rotate(360deg)}}
@keyframes ol-twinkle{0%,100%{opacity:.25}50%{opacity:.85}}
@keyframes ol-pulse{0%{transform:scale(1.1);opacity:.55}100%{transform:scale(2.1);opacity:0}}
@keyframes ol-breathe{0%,100%{opacity:.7;transform:scale(.95)}50%{opacity:1;transform:scale(1.05)}}
@keyframes ol-core{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
@media (prefers-reduced-motion:reduce){
  .ol-glow,.ol-ring,.ol-core,.ol-dots,.ol-dot{animation:none}
  .ol-ring{display:none}
  .ol-spin{animation-duration:3s}
}
`;

// deterministic (no Math.random) so server and client render the same dots
const makeDots = (n: number, spread: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = i * 2.399963;
    const r = (0.95 + (((i * 37) % 100) / 100) * 2.1) * spread;
    return {
      x: `${(50 + Math.cos(a) * r * 50).toFixed(2)}%`,
      y: `${(50 + Math.sin(a) * r * 50).toFixed(2)}%`,
      z: `${(1.5 + (i % 4) * 0.9).toFixed(1)}px`,
      d: `${(2 + (i % 5) * 0.6).toFixed(1)}s`,
      t: `${(-((i * 0.37) % 3)).toFixed(2)}s`,
    };
  });

const OrbitLoader = ({
  size = 72,
  lime = '217,239,138',
  purple = '124,92,255',
  fullscreen = false,
  label,
  dots = 28,
  className = '',
}: Props) => {
  const vars = {
    '--ol-s': `${size}px`,
    '--ol-l': lime,
    '--ol-p': purple,
  } as CSSProperties;

  const core = (
    <div className="ol-root" style={vars}>
      <span className="ol-glow" />
      {dots > 0 && (
        <span className="ol-dots" aria-hidden="true">
          {makeDots(dots, fullscreen ? 2.6 : 1).map((s, i) => (
            <i
              key={i}
              className="ol-dot"
              style={{ '--x': s.x, '--y': s.y, '--z': s.z, '--d': s.d, '--t': s.t } as CSSProperties}
            />
          ))}
        </span>
      )}
      <span className="ol-ring" />
      <span className="ol-ring" />
      <span className="ol-spin" />
      <div className="ol-core">{'</>'}</div>
    </div>
  );

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label ?? 'Loading'}
      className={`${fullscreen ? 'ol-full' : 'inline-flex flex-col items-center'} ${className}`}
      style={vars}
    >
      <style>{css}</style>
      {core}
      {label && <span className="ol-label">{label}</span>}
    </div>
  );
};

export default OrbitLoader;