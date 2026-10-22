'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Button from '@/components/buttons/button';
import AnimatedLineHeading from '@/components/AnimatedLineHeading';
import OrbitScene from '@/components/OrbitScene';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

const AlternateHome = () => (
  <main className="relative isolate min-h-[100svh] overflow-hidden bg-[#0A0A0A] text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 36rem 30rem at 10% 80%, rgba(124,92,255,.09), transparent 72%), radial-gradient(ellipse 32rem 32rem at 54% 62%, rgba(124,92,255,.08), transparent 72%)',
      }}
    />

    <section className="relative mx-auto flex min-h-[100svh] max-w-[2200px] flex-col px-5 pb-7 pt-6 sm:px-8 sm:pb-9 sm:pt-8 lg:px-[3vw]">
      <nav aria-label="Main navigation" className="relative z-20 flex items-center justify-between gap-3">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-[#D3E97A] sm:text-sm md:text-base md:tracking-[0.12em]"
          >
            {label}
          </Link>
        ))}
      </nav>

      <h1 className="relative z-10 mt-[clamp(1.5rem,4vh,4rem)] bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text text-center font-script text-[clamp(3rem,13vw,18rem)] uppercase leading-[0.95] tracking-[-0.001em] text-transparent">
        Hi, I&apos;m Zohaib
      </h1>

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[57%] z-0 -translate-x-1/2 -translate-y-1/2 scale-[1.05] sm:scale-[1.25] lg:scale-[1.5]"
      >
        <OrbitScene className="opacity-90" />
      </div>

      <div className="relative z-10 mt-auto flex flex-col items-start justify-between gap-8 pt-24 sm:flex-row sm:items-end sm:gap-5">
        <div className="max-w-[340px]">
          <p className="font-third text-sm font-medium uppercase leading-relaxed tracking-[0.08em] text-white/65 sm:text-base">
            Full-stack developer <span className="text-[#D3E97A]">·</span> MERN <span className="text-[#D3E97A]">·</span> Next.js <span className="text-[#D3E97A]">·</span> TypeScript
          </p>
          <div className="mt-4 text-white">
            <AnimatedLineHeading />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button title="Contact Me" />
          <Link
            href="https://www.linkedin.com/in/zohaib-ali-239468392/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.08] text-lg text-[#D3E97A] transition-colors hover:bg-white/[0.14] sm:h-[54px] sm:w-[54px]"
          >
            <FaLinkedinIn aria-hidden="true" />
          </Link>
          <Link
            href="https://github.com/zabi2404"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.08] text-lg text-[#D3E97A] transition-colors hover:bg-white/[0.14] sm:h-[54px] sm:w-[54px]"
          >
            <FaGithub aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default AlternateHome;
