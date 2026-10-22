'use client';

import { motion } from 'framer-motion';

const HomeThirdSection = () => (
  <section className="relative isolate px-6 py-20 sm:py-24 lg:px-[7vw] lg:py-32">
    <div className="mx-auto max-w-[1440px]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#D3E97A] sm:text-sm">
          A little about me
        </p>

        <h1 className="overflow-hidden bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text font-script text-[clamp(4rem,13.4vw,13rem)] uppercase leading-[0.82] tracking-[-0.055em] text-transparent">
          Hi, I&apos;m Zohaib
        </h1>

        <div className="mt-12 grid gap-8 pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Full-stack developer</p>
            <p className="text-sm text-white/65">MERN stack <span className="px-1.5 text-[#D3E97A]">·</span> Next.js <span className="px-1.5 text-[#D3E97A]">·</span> TypeScript</p>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-7 text-[#C7C7C7] sm:text-lg sm:leading-8">
              I build responsive, scalable web applications from idea to deployment. I enjoy pairing thoughtful interfaces with dependable backend systems, and care about making products work beautifully across devices. My work spans React and Next.js, Node.js, Express, NestJS, MongoDB, PostgreSQL, and MySQL. I’m always exploring new tools and collaborating on ideas that push the web forward.
            </p>

          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeThirdSection;
