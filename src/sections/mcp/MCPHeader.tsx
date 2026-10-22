"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiLayers, FiMail, FiSmile, FiUser } from "react-icons/fi";

const navCards = [
  { label: "Me", href: "/about", icon: FiUser },
  { label: "Projects", href: "/work", icon: FiBriefcase },
  { label: "Skills", href: "/skills", icon: FiLayers },
  { label: "Fun", href: "/", icon: FiSmile },
  { label: "Contact", href: "/contact", icon: FiMail },
];

const MCPHeader = () => {
  return (
    <section 
      className="relative   overflow-hidden px-4 py-10 md:px-10 "
      style={{
        backgroundImage: `url('/Images/Grid%20layers%20-%20v3.png')`,
        backgroundPosition: "center",
        backgroundBlendMode:"color",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >

      <div className="relative mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-third text-white/90 backdrop-blur-xl shadow-[0_12px_32px_rgba(7,9,20,0.45)] transition-colors hover:bg-white/12"
        >
          Build your AI portfolio
          <FiArrowRight className="text-base" />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full rounded-[32px] border border-white/15 bg-white/[0.05] px-4 py-8 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_30px_80px_rgba(3,5,15,0.65)] md:px-8"
        >
          <motion.img
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.05, ease: "easeOut" }}
            src="https://capsule-render.vercel.app/api?type=venom&height=176&color=0:050507,100:4338ca&text=MCP%20Servers&fontSize=52&fontColor=FFFFFF&animation=fadeIn&fontAlignY=42&desc=Model%20Context%20Protocol&descSize=18&descColor=E5E7EB&descAlignY=67"
            className="mx-auto w-full max-w-[760px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
            alt="MCP venom banner"
          />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-7 flex w-full max-w-[720px] items-center rounded-full border border-white/24 bg-white/[0.08] px-5 py-2.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_30px_rgba(2,8,30,0.4)]"
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full bg-transparent text-[15px] text-white/90 outline-none placeholder:text-white/45"
            />
            <button
              type="button"
              className="ml-3 grid h-9 w-9 place-items-center rounded-full border border-white/35 bg-white/18 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/30"
              aria-label="Ask"
            >
              <FiArrowRight />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mx-auto mt-5 flex w-full max-w-[720px] flex-wrap items-center justify-center gap-3"
          >
            {navCards.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="group flex min-w-[98px] items-center justify-center gap-2 rounded-2xl border border-white/22 bg-white/[0.07] px-4 py-3 text-sm font-third text-white/85 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_24px_rgba(5,9,24,0.32)] transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/16"
              >
                <Icon className="text-white/60 transition-colors group-hover:text-white" />
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <p className="pointer-events-none mt-10 select-none text-[68px] font-script leading-none text-white/20 md:text-[132px]">
          MCP
        </p>
      </div>
    </section>
  );
};

export default MCPHeader;
