'use client'
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedButton from '@/components/buttons/AnimatedButton';

const Footer = () => {
    const pathname = usePathname();
    const date = new Date().getFullYear();
    const isHomePage = pathname === '/';

    if (pathname === '/contact') return null;

    return (
        <footer className={`w-full bg-[#0a0a0a] ${isHomePage ? '' : 'border-t border-white/[0.06]'}`}>

            {/* Top CTA strip */}
            <div className={`lg:px-[108px] xsm:px-6 pt-16 pb-12 ${isHomePage ? '' : 'border-b border-white/[0.06]'}`}>
                <div className="flex lg:flex-row xsm:flex-col lg:items-end justify-between gap-6">
                    <div>
                        <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-3">Available for work</p>
                        <h2 className="text-white font-bold xsm:text-[32px] lg:text-[48px] leading-none tracking-tight">
                            Let&apos;s build something<br />
                            <span className="text-[#D3E97A]">great together.</span>
                        </h2>
                    </div>
                    <AnimatedButton
                        title="Get in touch"
                        href="mailto:zohaib24a@gmail.com"
                        text="xsm:text-[12px]"
                    />
                </div>
            </div>

            {/* Main footer grid */}
            <div className="grid gap-12 pt-12 pb-10 lg:grid-cols-2 lg:px-[108px] xsm:px-6">

                {/* Brand col */}
                <div className="flex flex-col gap-6">
                    <p className="text-white font-bold text-[22px] tracking-widest uppercase">Zohaib Ali</p>
                    <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
                        Full Stack MERN Developer. Building fast, scalable web applications from idea to deployment.
                    </p>
                    <div className="flex items-center gap-5">
                        {[
                            { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/zohaib-ali-239468392/' },
                            { icon: <FaGithub />, href: 'https://github.com/zabi2404' },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href || '#'}
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#D3E97A] hover:border-[#D3E97A]/40 transition-all duration-300 text-sm"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact col */}
                <div className="flex flex-col gap-5">
                    <p className="text-white/30 text-xs tracking-[0.2em] uppercase">Contact</p>
                    <div className="flex flex-col gap-4">
                        <a
                            href="mailto:zohaib24a@gmail.com"
                            className="text-sm text-white/40 hover:text-[#D3E97A] transition-colors duration-300 w-fit"
                        >
                            zohaib24a@gmail.com
                        </a>
                        <a
                            href="tel:+923008901960"
                            className="text-sm text-white/40 hover:text-[#D3E97A] transition-colors duration-300 w-fit"
                        >
                            +92 300 8901960
                        </a>
                        <p className="text-sm text-white/40">Lahore, Pakistan</p>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className={`lg:px-[108px] xsm:px-6 py-5 flex lg:flex-row xsm:flex-col gap-3 justify-between items-center ${isHomePage ? '' : 'border-t border-white/[0.06]'}`}>
                <p className="text-white/20 text-xs">© {date} Zohaib Ali. All rights reserved.</p>
                <p className="text-white/20 text-xs">Designed & Built by Zohaib Ali</p>
            </div>

        </footer>
    );
};

export default Footer;
