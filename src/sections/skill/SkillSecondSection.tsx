'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SkillButton from '@/components/SkillButton';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SkillSecondSectionProps = {
  variant?: 'page' | 'home';
};

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that load fast and feel considered.',
    width: 'lg:col-span-7',
    skills: [
      { name: 'React', core: true }, { name: 'Next.js', core: true }, { name: 'TypeScript', core: true },
      { name: 'JavaScript' }, { name: 'React Native' }, { name: 'Tailwind', core: true },
      { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Material UI' }, { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Services and APIs that hold up under real use.',
    width: 'lg:col-span-5',
    skills: [
      { name: 'Node.js', core: true }, { name: 'Express', core: true }, { name: 'Nest.js' },
      { name: 'GraphQL' }, { name: 'REST' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational, document, and realtime storage.',
    width: 'lg:col-span-5',
    skills: [
      { name: 'MongoDB', core: true }, { name: 'PostgreSQL', core: true }, { name: 'MySQL' },
      { name: 'Redis' }, { name: 'Firebase' }, { name: 'Supabase' },
    ],
  },
  {
    title: 'Tools & Integrations',
    description: 'Shipping, automating, and connecting everything together.',
    width: 'lg:col-span-7',
    skills: [
      { name: 'Git', core: true }, { name: 'Docker', core: true }, { name: 'AWS' },
      { name: 'Postman' }, { name: 'n8n' }, { name: 'MCP' },
    ],
    showLegend: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillSecondSection = ({ variant = 'page' }: SkillSecondSectionProps) => {
  const isHomeSection = variant === 'home';
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isHomeSection || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = gsap.utils.toArray<HTMLElement>('[data-skill-card]', cardsGridRef.current);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: index % 2 === 0 ? -150 : 150,
          y: 28,
          scale: 0.94,
          autoAlpha: 0.45,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            end: 'top 55%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, { scope: cardsGridRef, dependencies: [isHomeSection] });

  return (
    <section
      id={isHomeSection ? 'home-skills' : undefined}
      className={`relative isolate px-6 py-16 sm:py-20 lg:px-[7vw] lg:py-24 ${isHomeSection ? '' : 'border-b border-[#484848]'}`}
    >
      {isHomeSection ? (
        <div className="mx-auto max-w-[1440px]">
          <header className="mb-9 flex flex-col items-start gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:flex-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-[clamp(4.5rem,13vw,10rem)] leading-[0.85]"
            >
              <span className="bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text text-transparent">Capabilities</span>
              <span className="text-[#D3E97A]">.</span>
            </motion.h1>
            <p className="max-w-[34ch] pb-1 text-sm leading-6 text-white/55 sm:text-base">
              A practical toolkit for building polished interfaces, dependable APIs, and complete web products.
            </p>
          </header>

          <div ref={cardsGridRef} className="grid grid-cols-12 gap-4 sm:gap-5">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                data-skill-card
                onPointerMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
                  event.currentTarget.style.setProperty('--my', `${event.clientY - bounds.top}px`);
                }}
                className={`group relative isolate col-span-12 overflow-hidden rounded-[20px] border border-[#26262a] bg-[#111113] p-6 sm:p-7 lg:p-7 ${group.width}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(211, 233, 122, 0.16), transparent 70%)' }}
                />
                <div className="relative z-10">
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-semibold text-[#f2f2f0] sm:text-xl">{group.title}</h2>
                    <span className="shrink-0 text-sm tabular-nums text-[#8c8c93]">{group.skills.length} tools</span>
                  </div>
                  <p className="mb-5 max-w-[44ch] text-sm text-[#8c8c93]">{group.description}</p>
                  <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                    {group.skills.map((skill, index) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: index * 0.035, ease: [0.2, 0.7, 0.2, 1] }}
                        whileHover={{ y: -2 }}
                        className={`group/skill rounded-full border px-4 py-2 text-sm text-[#f2f2f0] transition-colors hover:border-[#d4f26b] hover:bg-[#d4f26b] hover:text-[#0a0a0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4f26b] ${skill.core ? 'border-[#d4f26b]/55' : 'border-[#26262a]'}`}
                      >
                        {skill.core && <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#d4f26b] align-middle transition-colors group-hover/skill:bg-[#0a0a0b]" />}
                        {skill.name}
                      </motion.li>
                    ))}
                  </ul>
                  {group.showLegend && (
                    <p className="mt-5 flex items-center gap-2 text-[13px] text-[#8c8c93]">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#d4f26b]" />
                      Daily drivers
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col justify-center sm:text-center lg:text-left">
            <img
              src="https://capsule-render.vercel.app/api?type=venom&height=260&color=0:000000,100:a371f7&text=Capabilities&fontSize=68&fontColor=FFFFFF&animation=fadeIn&fontAlignY=40&descAlignY=65"
              className="w-full max-w-[820px] min-[1250px]:max-w-[980px] min-[1250px]:scale-[1.18] origin-right"
              alt="Capabilities"
            />
          </div>

          <div>
            <p className="font-secondary text-[#C7C7C7]">
              Full-stack developer building scalable web applications with the MERN stack and TypeScript-first technologies. Proficient in React, Next.js, Node.js, Express, and databases including MongoDB, PostgreSQL, MySQL, and Redis. Experienced in developing real-time applications, RESTful and GraphQL APIs, and implementing secure authentication systems. Comfortable with Docker containerization and MCP (Model Context Protocol) for AI-powered integrations.
            </p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={container}
              className="flex flex-wrap gap-3 sm:justify-center sm:gap-4 lg:justify-start lg:py-8"
            >
              {skillGroups.flatMap((group) => group.skills).map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <SkillButton title={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillSecondSection;
