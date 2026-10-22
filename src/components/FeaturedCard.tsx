'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FeaturedCardProps = {
  Image: string;
  projectType: string;
  highlights: string[];
  title: string;
  description: string;
  link: string;
  githubLink: string;
};

const resolveExternalHref = (value: string) => {
  if (!value || value === '#') return '#';
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `https://${value}`;
};

const FeaturedCard = ({ Image, projectType, highlights, title, description, link, githubLink }: FeaturedCardProps) => {
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const timeline = gsap.timeline({
        scrollTrigger: {
    trigger: card,
    start: 'top 90%',
    end: 'top 35%',        // finishes when the card top reaches 35% of the screen
    scrub: 0.6,            // small smoothing, use true for exact 1:1 with the scroll
    invalidateOnRefresh: true,
    // markers: true,      // turn on once to see the start and end lines
  },
});

    timeline
      .fromTo(
        card.querySelector('[data-project-title]'),
        { x: 90, autoAlpha: 0.35, clipPath: 'inset(0 0 0 100%)' },
        { x: 0, autoAlpha: 1, clipPath: 'inset(0 0 0 0%)', ease: 'none' },
        0
      )
      .fromTo(
        card.querySelector('[data-project-image]'),
        { y: 130, autoAlpha: 0.45, clipPath: 'inset(100% 0 0 0)' },
        { y: 0, autoAlpha: 1, clipPath: 'inset(0% 0 0 0)', ease: 'none' },
        0
      );

    const actions = card.querySelector('[data-project-actions]');
    if (actions) {
      gsap.fromTo(
        actions.querySelectorAll('[data-project-action]'),
        { x: 110, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: actions,
            start: 'top 92%',
            end: 'top 62%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }, { scope: cardRef });

  return (
  <article
    ref={cardRef}
    className="mx-auto mb-20 w-full max-w-[1440px] sm:mb-28"
  >
    <div className="grid items-end gap-7 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div className="min-w-0">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D3E97A] sm:text-sm">Featured project</p>
        <h2 data-project-title className="bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text font-script text-[clamp(5rem,13vw,10rem)] uppercase leading-[0.82] text-transparent">
          {title}
        </h2>
      </div>

      <div className="group relative overflow-hidden rounded-t-2xl border border-b-0 border-[#26262a] bg-[#111113]">
        <div className="flex h-10 items-center gap-1.5 border-b border-[#26262a] px-4">
          <span className="h-2 w-2 rounded-full bg-[#333338]" />
          <span className="h-2 w-2 rounded-full bg-[#333338]" />
          <span className="h-2 w-2 rounded-full bg-[#333338]" />
          <span className="ml-3 flex h-6 max-w-[50%] items-center truncate rounded-md border border-[#26262a] px-3 text-[10px] text-white/35">{title.toLowerCase().replaceAll(' ', '')}.app</span>
        </div>
        <img
          data-project-image
          src={Image}
          alt={`${title} application preview`}
          loading="lazy"
          className="aspect-[16/8.5] w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0a0a0b]" />
      </div>
    </div>

    <div className="mt-1 h-px bg-[#222227]" />

    <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_1.9fr] lg:gap-12">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#7f7f88]">{projectType}</p>
        <ul className="flex list-none flex-wrap p-0 text-sm leading-8 text-[#b8b8bf] sm:text-base">
          {highlights.map((highlight, index) => (
            <li key={highlight} className="whitespace-nowrap">
              {index > 0 && <span aria-hidden="true" className="mx-3 text-[#D3E97A]">·</span>}
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="max-w-[62ch] text-base leading-7 text-[#b8b8bf] sm:text-lg sm:leading-8">{description}</p>
        <div data-project-actions className="mt-7 flex flex-wrap items-center justify-start gap-x-6 gap-y-4">
          <div data-project-action>
            <Link
              href={resolveExternalHref(githubLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="group/action order-2 relative inline-flex py-3 text-sm font-medium text-[#ececef] after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#D3E97A] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D3E97A] focus-visible:after:w-full"
            >
              Source code ↗
            </Link>
          </div>
          <div data-project-action>
            <Link
              href={resolveExternalHref(link)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsDemoHovered(true)}
              onMouseLeave={() => setIsDemoHovered(false)}
              onFocus={() => setIsDemoHovered(true)}
              onBlur={() => setIsDemoHovered(false)}
              className="group/action order-1 inline-flex h-12 w-[163px] items-center justify-center gap-2 rounded-full bg-[#D3E97A] text-sm font-bold text-[#0A0A0A] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e2f59a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A] md:h-[54px] md:w-[187px] md:gap-4 md:text-base"
            >
              Live demo
              <motion.span
                aria-hidden="true"
                animate={{ width: isDemoHovered ? 35 : 10, height: isDemoHovered ? 35 : 10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex shrink-0 items-center justify-center rounded-full bg-black"
              >
                <motion.span
                  animate={{ scale: isDemoHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  <FaArrowRight className="h-[18px] w-[18px] rotate-[-40deg] text-white" />
                </motion.span>
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </article>
  );
};

export default FeaturedCard;
