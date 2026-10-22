'use client';

import React, { useEffect, useRef } from 'react';
import { wrapGrid } from 'animate-css-grid';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/buttons/button';
import AnimatedLineHeading from '@/components/AnimatedLineHeading';
import OrbitScene from '@/components/OrbitScene';

const Header = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current, {
        duration: 1000,
        easing: 'easeInOut',
      });
    }
  }, []);

  const leftSectionVariants = {
    hidden: { opacity: 0, y: 48 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, y: 48 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const actionContainerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const actionItemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <div
      ref={gridRef}
      className="relative isolate grid min-h-[100svh] grid-cols-12 items-end gap-y-10 overflow-hidden px-6 py-12 sm:gap-y-14 lg:px-[7vw] lg:py-16"
    >
      <div className="absolute right-6 top-[12vh] z-0 hidden origin-top-right lg:right-[7vw] lg:block lg:scale-[0.92] xl:scale-[1.05]">
        <OrbitScene className="opacity-85" />
      </div>

      <motion.div
        initial="hidden"
        viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        variants={leftSectionVariants}
        className="col-span-12 flex flex-col"
      >
        <p className="mb-5 text-left text-xs font-semibold uppercase tracking-[0.26em] text-[#D3E97A] sm:text-sm">
          A little about me
        </p>
        <h1 className="bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text font-script text-[clamp(4rem,12.5vw,11rem)] uppercase leading-[0.82] tracking-[-0.055em] text-transparent">
          Hi, I&apos;m Zohaib
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-2 text-sm text-white/65 sm:text-base">
          <span>Full-stack developer</span>
          <span aria-hidden="true" className="text-[#D3E97A]">·</span>
          <span>MERN stack</span>
          <span aria-hidden="true" className="text-[#D3E97A]">·</span>
          <span>Next.js</span>
          <span aria-hidden="true" className="text-[#D3E97A]">·</span>
          <span>TypeScript</span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={rightSectionVariants}
        className="col-span-12 grid grid-cols-12 items-end gap-x-8 gap-y-8"
      >
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            variants={formItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="max-w-[424px] text-left font-secondary text-base leading-7 text-[#C7C7C7] sm:leading-8 md:text-[18px]"
          >
            I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js), with strong expertise in Next.js, TypeScript, and modern JavaScript libraries.
          </motion.p>
        </div>

        <div className="col-span-12 flex flex-col items-end gap-7 ml-[129px]  pt-6 sm:flex-row sm:items-center sm:justify-between lg:col-span-5 lg:flex-col lg:items-center lg:justify-end  lg:pb-1 lg:pt-0">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={formItemVariants}
            className="min-h-[58px]  max-w-[680px] leading-none lg:min-h-[64px]"
          >
            <AnimatedLineHeading />
          </motion.div>

          <motion.div
            variants={actionContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-row-reverse items-center justify-end gap-4 sm:justify-center lg:justify-start"
          >
            <motion.div variants={actionItemVariants}>
              {/* <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-fit w-fit rounded-full border border-transparent shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D3E97A]"
                  href="https://www.linkedin.com/in/zohaib-ali-239468392/"
                >
                  <img src="/Images/linkedin_icon.svg" alt="" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="h-fit w-fit rounded-full border border-transparent shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D3E97A]"
                  href="https://github.com/zabi2404"
                >
                  <img src="/Images/github_icon.svg" alt="" />
                </Link>
              </div> */}
            </motion.div>
            <motion.div variants={actionItemVariants}>
              <Button title="Contact Me" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
