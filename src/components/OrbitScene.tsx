'use client';

import { useEffect, useRef } from 'react';

type Orbit = { R: number; tilt: number; speed: number; items: string[] };

type Props = {
  /** RGB triplet, e.g. your lime #d9ef8a -> "217,239,138" */
  lime?: string;
  /** RGB triplet for the purple accent */
  purple?: string;
  /** Font family used for the chips (use your body font) */
  fontFamily?: string;
  className?: string;
};

const ORBITS: Orbit[] = [
  { R: 95, tilt: 0.35, speed: 0.9, items: ['React', 'Next.js'] },
  { R: 140, tilt: -0.6, speed: -0.6, items: ['Node', 'Mongo', 'AWS'] },
  { R: 185, tilt: 1.0, speed: 0.4, items: ['TypeScript', 'Express', 'RN'] },
];

type Draw = { z: number; f: () => void };
type Pos = { x: number; y: number; k: number; n: string };

const OrbitScene = ({
  lime = '217,239,138',
  purple = '124,92,255',
  fontFamily = 'Inter, system-ui, sans-serif',
  className = '',
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LIME = lime;
    const PUR = purple;

    const nodes = ORBITS.flatMap((o) =>
      o.items.map((label, i) => ({ o, label, phase: (i / o.items.length) * Math.PI * 2 }))
    );
    const stars = Array.from({ length: 70 }, () => ({
      a: Math.random() * 6.28,
      b: Math.acos(2 * Math.random() - 1),
      r: 150 + Math.random() * 90,
    }));

    let W = 0;
    let H = 0;
    let mx = 0;
    let my = 0;
    let rx = 0.5;
    let ry = 0;
    let vx = 0;
    let vy = 0;
    let drag = false;
    let lx = 0;
    let ly = 0;
    let hover: string | null = null;
    let time = 0;
    let pos: Pos[] = [];
    let raf = 0;
    let visible = true;
    let running = false;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };

    const P = (x: number, y: number, z: number, tilt: number) => {
      const y1 = y * Math.cos(tilt) - z * Math.sin(tilt);
      const z1 = y * Math.sin(tilt) + z * Math.cos(tilt);
      const x2 = x * Math.cos(ry) + z1 * Math.sin(ry);
      const z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
      const y3 = y1 * Math.cos(rx) - z2 * Math.sin(rx);
      const z3 = y1 * Math.sin(rx) + z2 * Math.cos(rx);
      const k = 520 / (520 + z3);
      const s = W / 440;
      return { x: W / 2 + x2 * k * s, y: H / 2 + y3 * k * s, z: z3, k };
    };

    const draw = () => {
      const s = W / 440;
      const cx = W / 2;
      const cy = H / 2;
      const pulse = 1 + Math.sin(time * 3) * 0.06;
      ctx.clearRect(0, 0, W, H);

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120 * s);
      g.addColorStop(0, `rgba(${PUR},.45)`);
      g.addColorStop(0.5, `rgba(${PUR},.12)`);
      g.addColorStop(1, `rgba(${PUR},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      const draws: Draw[] = [];

      // stars
      for (const st of stars) {
        const x = st.r * Math.sin(st.b) * Math.cos(st.a + time * 0.2);
        const y = st.r * Math.cos(st.b);
        const z = st.r * Math.sin(st.b) * Math.sin(st.a + time * 0.2);
        const p = P(x, y, z, 0);
        draws.push({
          z: p.z,
          f: () => {
            ctx.fillStyle = `rgba(255,255,255,${0.15 + p.k * 0.25})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.k * s, 0, 6.28);
            ctx.fill();
          },
        });
      }

      // orbit rings
      ORBITS.forEach((o, oi) => {
        const seg = 72;
        const pts = Array.from({ length: seg + 1 }, (_, i) => {
          const a = (i / seg) * 6.28;
          return P(o.R * Math.cos(a), 0, o.R * Math.sin(a), o.tilt);
        });
        for (let i = 0; i < seg; i++) {
          const a = pts[i];
          const b = pts[i + 1];
          draws.push({
            z: (a.z + b.z) / 2,
            f: () => {
              ctx.strokeStyle = `rgba(${oi === 1 ? PUR : LIME},${0.06 + 0.14 * a.k * a.k})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            },
          });
        }
      });

      // chips + trails
      pos = [];
      for (const n of nodes) {
        const a = n.phase + time * n.o.speed * 2;
        for (let t = 10; t >= 1; t--) {
          const aa = a - t * 0.05 * Math.sign(n.o.speed);
          const p = P(n.o.R * Math.cos(aa), 0, n.o.R * Math.sin(aa), n.o.tilt);
          draws.push({
            z: p.z,
            f: () => {
              ctx.fillStyle = `rgba(${LIME},${0.22 * (1 - t / 10) * p.k})`;
              ctx.beginPath();
              ctx.arc(p.x, p.y, (3.5 - t * 0.25) * p.k * s, 0, 6.28);
              ctx.fill();
            },
          });
        }
        const p = P(n.o.R * Math.cos(a), 0, n.o.R * Math.sin(a), n.o.tilt);
        pos.push({ x: p.x, y: p.y, k: p.k, n: n.label });
        draws.push({
          z: p.z,
          f: () => {
            const active = hover === n.label;
            const sc = p.k * s * (active ? 1.25 : 1);
            const al = Math.min(1, 0.35 + p.k * 0.65 * (p.z < 0 ? 1 : 0.8));
            ctx.font = `500 ${12 * sc}px ${fontFamily}`;
            const w = ctx.measureText(n.label).width + 18 * sc;
            const h = 24 * sc;
            ctx.globalAlpha = al;
            ctx.fillStyle = 'rgba(22,22,30,.92)';
            ctx.strokeStyle = active ? `rgb(${LIME})` : 'rgba(255,255,255,.18)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(p.x - w / 2, p.y - h / 2, w, h, h / 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(n.label, p.x, p.y + 0.5);
            ctx.globalAlpha = 1;
          },
        });
      }

      // core
      draws.push({
        z: 0,
        f: () => {
          const r = 34 * s * pulse;
          const cg = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 2, cx, cy, r);
          cg.addColorStop(0, 'rgb(52,52,70)');
          cg.addColorStop(0.6, 'rgb(18,18,26)');
          cg.addColorStop(1, 'rgb(8,8,12)');
          ctx.shadowColor = `rgba(${LIME},.35)`;
          ctx.shadowBlur = 28 * s;
          ctx.fillStyle = cg;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, 6.28);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(${LIME},.9)`;
          ctx.lineWidth = 1.5 * s;
          ctx.stroke();
          const ph = (time * 1.2) % 1;
          ctx.strokeStyle = `rgba(${LIME},${0.35 * (1 - ph)})`;
          ctx.lineWidth = s;
          ctx.beginPath();
          ctx.arc(cx, cy, r * (1.1 + ph * 0.9), 0, 6.28);
          ctx.stroke();
          ctx.fillStyle = `rgb(${LIME})`;
          ctx.font = `600 ${22 * s}px ui-monospace, Menlo, Consolas, monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('</>', cx, cy + s);
        },
      });

      draws.sort((a, b) => b.z - a.z).forEach((d) => d.f());
    };

    const frame = () => {
      if (!visible) {
        running = false;
        return;
      }
      time += hover ? 0.0015 : 0.008;
      ry += vy;
      rx += vx;
      vx *= 0.95;
      vy *= 0.95;
      if (!drag) {
        ry += (mx * 0.9 - ry) * 0.02 + 0.0015;
        rx += (0.5 + my * 0.6 - rx) * 0.02;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduce || running || !visible) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    // pointer handling (mouse + touch)
    const local = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height };
    };
    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const q = local(e);
      if (drag) {
        vy += (e.clientX - lx) * 0.0004;
        vx += (e.clientY - ly) * 0.0004;
        lx = e.clientX;
        ly = e.clientY;
      } else {
        mx = q.x / q.w - 0.5;
        my = q.y / q.h - 0.5;
      }
      hover = null;
      for (const p of pos) {
        if (Math.hypot(p.x - q.x, p.y - q.y) < 30 * p.k) hover = p.n;
      }
    };
    const onDown = (e: PointerEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      cv.setPointerCapture(e.pointerId);
    };
    const onUp = () => {
      drag = false;
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
      hover = null;
    };

    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointercancel', onUp);
    cv.addEventListener('pointerleave', onLeave);

    const ro = new ResizeObserver(size);
    ro.observe(cv);

    // pause when off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { threshold: 0.05 }
    );
    io.observe(cv);

    size();
    if (reduce) draw();
    else start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      cv.removeEventListener('pointermove', onMove);
      cv.removeEventListener('pointerdown', onDown);
      cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('pointercancel', onUp);
      cv.removeEventListener('pointerleave', onLeave);
    };
  }, [lime, purple, fontFamily]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-[min(440px,90vw)] w-[min(440px,90vw)] cursor-grab touch-pan-y active:cursor-grabbing ${className}`}
    />
  );
};

export default OrbitScene;