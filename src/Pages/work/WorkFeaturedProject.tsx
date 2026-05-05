"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion";

type ProjectRow = {
    id: string;
    title: string;
    stack: string[];
    type: "full stack" | "Clone" | "AUTOMATION" | "Static" | "Vibe Coded" | "MOBILE";
    year: string;
    link: string
};

const rows: ProjectRow[] = [
    {
        id: "00",
        title: "Keeper",
        stack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Redis", "Docker"],
        type: "Clone",
        year: "2023",
        link: "https://zabi2404.github.io/Tindog2.0/"
    },
    {
        id: "01",
        title: "Relay",
        stack: ["React", "Node.js", "WebSocket", "MySQL"],
        type: "full stack",
        year: "2025",
        link: "https://relay-fc4p.onrender.com/"
    },
    {
        id: "02",
        title: "Bye Wind",
        stack: ["React", "Node.js", "Express", "Prisma"],
        type: "Vibe Coded",
        year: "2025",
        link: ""
    },
    {
        id: "03",
        title: "Real Estate",
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
        type: "full stack",
        year: "2025",
        link: "https://real-estate-mern02.netlify.app/"
    },
    {
        id: "04",
        title: "HRM",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        type: "full stack",
        year: "2025",
        link: ""
    },
    {
        id: "05",
        title: "Dashdark X",
        stack: ["React", "TypeScript"],
        type: "Static",
        year: "2025",
        link: "https://dashdark-x.netlify.app/user"
    },
    {
        id: "06",
        title: "Esyasoft",
        stack: ["React", "CSS"],
        type: "Static",
        year: "2025",
        link: "https://esyasoft.netlify.app/"
    },
    {
        id: "07",
        title: "Tindog",
        stack: ["HTML", "CSS", "Bootstrap"],
        type: "Static",
        year: "2025",
        link: "https://zabi2404.github.io/Tindog2.0/"
    },
    {
        id: "08",
        title: "Recurrly",
        stack: ["React_Native", "Expo", "NativeWind"],
        type: "MOBILE",
        year: "2025",
        link: "https://zabi2404.github.io/Tindog2.0/"
    },
    {
        id: "09",
        title: "N8N Ai Assistant Workflow",
        stack: ["React_Native", "Expo", "NativeWind"],
        type: "AUTOMATION",
        year: "2025",
        link: "https://zabi2404.github.io/Tindog2.0/"
    },

];

const badgeClass: Record<ProjectRow["type"], string> = {
    "full stack": "bg-[#D3E97A]/10 text-[#D3E97A] border border-[#D3E97A]/20",
    "Clone": "bg-white/5 text-white/45 border border-white/12",
    "AUTOMATION": "bg-[#60A5FA]/8 text-[#7eb8ff] border border-[#60A5FA]/20",
    "Static": "bg-[#FBbf24]/8 text-[#f5c842] border border-[#FBbf24]/18",
    "Vibe Coded": "bg-[#C084FC]/8 text-[#c084fc] border border-[#C084FC]/18",
    "MOBILE": "bg-[#F87171]/8 text-[#f87171] border border-[#F87171]/18",
};
function WorkFeaturedProject() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<"ALL" | ProjectRow["type"]>("ALL");

    const filteredRows =
        activeFilter === "ALL" ? rows : rows.filter((row) => row.type === activeFilter);

    return (
        <>
            <section className="border-t border-b border-white/[0.06]">
                <div className="mx-auto w-full px-5 py-6 md:px-8 md:py-8">
                    <div className="grid grid-cols-1 gap-4 border-b border-white/[0.06] pb-5 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                            <h2 className="font-third text-[42px] leading-[0.92] text-white md:text-[58px]">
                                FEATURED
                                <span className="block">PROJECTS</span>
                            </h2>
                            <p className="mt-2 font-secondary text-[14px] text-white/45 md:text-[18px]">
                                Selected work · Full Stack & Automation
                            </p>
                        </div>
                        <p className="font-secondary text-[13px] leading-tight text-white/35 md:text-[18px]">
                            {rows.length}
                            <span className="block">projects</span>
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2.5 pb-4 md:mt-5 md:gap-3">
                        {[
                            { key: "ALL", label: "All" },
                            { key: "FULL STACK", label: "Full Stack" },
                            { key: "CLONE", label: "Clone" },
                            { key: "AUTOMATION", label: "Automation" },
                            { key: "MOBILE", label: "Mobile" },
                        ].map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setActiveFilter(f.key as "ALL" | ProjectRow["type"])}
                                className={`rounded-xl border px-3.5 py-1.5 font-secondary text-[13px] transition-all md:rounded-[12px] md:px-5 md:py-2 md:text-[16px] ${activeFilter === f.key
                                    ? "border-white/30 bg-white/[0.08] text-white"
                                    : "border-white/[0.14] bg-transparent text-white/85 hover:border-white/24"
                                    }`}
                                type="button"
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <div className='max-h-[600px] w-full overflow-y-scroll scrollBar px-8 py-15'>

                        {filteredRows.map((row) => (
                            <a key={row.id} href={row.link} target="_blank" rel="noopener noreferrer">

                                <motion.article
                                    key={row.id}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    onMouseEnter={() => setHoveredId(row.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative grid grid-cols-[48px_1fr_auto] items-center gap-2 border-b border-white/[0.06] py-4 transition-colors duration-200 hover:bg-white/[0.015] last:border-b-0 md:grid-cols-[64px_1fr_auto] md:py-5"
                                >
                                    <div className="text-[14px] font-medium text-white/25 md:text-[24px]">
                                        {row.id}
                                    </div>

                                    <div>
                                        <h3 className={`font-third text-[24px] leading-none tracking-[0.02em] transition-colors duration-200 md:text-[34px] ${hoveredId === row.id ? "text-[#D3E97A]" : "text-white"}`}>
                                            {row.title}
                                        </h3>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {row.stack.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-white/[0.12] px-2.5 py-0.5 text-[10px] leading-none text-white/40 transition-colors duration-200 group-hover:text-white/55 md:text-[12px]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 self-start pt-1 md:gap-4 md:pt-2">
                                        <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[0.08em] md:text-[10px] ${badgeClass[row.type]}`}>
                                            {row.type}
                                        </span>
                                        <span className="text-[11px] font-semibold text-white/30 md:text-[13px]">{row.year}</span>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: hoveredId === row.id ? 1 : 0,
                                            x: hoveredId === row.id ? 0 : 20,
                                            scale: hoveredId === row.id ? 1 : 0.98,
                                        }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="pointer-events-none absolute right-[-2] top-1/2 hidden h-[120px] w-[220px] -translate-y-1/2 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.09] to-white/[0.03] backdrop-blur-xl xl:flex items-center justify-center"
                                    >
                                        <span className="font-third text-[22px] font-semibold tracking-[0.06em] text-white/20">
                                            {row.title.split(" ")[0]}
                                        </span>
                                    </motion.div>
                                </motion.article>
                            </a>
                        ))}
                    </div>
                </div>
            </section>



        </>
    )
}

export default WorkFeaturedProject