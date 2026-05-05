import type { ReactNode } from "react";

type PageGlassWrapperProps = {
  children: ReactNode;
  toneLabel?: string;
};

export default function PageGlassWrapper({
  children,
  toneLabel = "In Progress",
}: PageGlassWrapperProps) {
  return (
    <div className="min-h-screen blur-[10px] bg-[#171717] p-3 md:p-5">
      <div className="relative mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-[1400px] overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.04] shadow-[0_32px_90px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl md:min-h-[calc(100vh-2.5rem)]">
        <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border border-white/18 bg-white/[0.08] px-3 py-1 text-yellow-300 text-[10px] font-third uppercase tracking-[0.12em]  backdrop-blur-xl md:right-4 md:top-4">
          {toneLabel}
        </span>
        {children}
      </div>
    </div>
  );
}