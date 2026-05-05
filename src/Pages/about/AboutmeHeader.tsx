"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { wrapGrid } from 'animate-css-grid';
import DownloadButton from '@/components/buttons/DownloadButton';
const AboutmeHeader = () => {

  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);


  // Initialize animate-css-grid
  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current, {
        duration: 600,

        stagger: 0,
      });
    }
  }, []);

  // Update layout on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <>
      <motion.div
        ref={gridRef}
        className={`grid   pb-20  
  ${isLaptop ?  "grid-cols-2":"grid-cols-1"} 
  lg:pt-40 lg:pb-[120px] lg:text-start
  xsm:pt-10 xsm:pb-20
  transition-padding duration-700
sm:text-center
  `
      }>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={leftSectionVariants}
        >
          <img
            src="https://capsule-render.vercel.app/api?type=venom&height=260&color=0:000000,100:a371f7&text=About%20me&fontSize=68&fontColor=FFFFFF&animation=fadeIn&fontAlignY=40&descAlignY=65"
            className="w-full max-w-[820px] min-[1250px]:max-w-[980px] min-[1250px]:scale-[1.18] origin-right"
            alt="Zohaib Ali banner"
          />
          <motion.h1
            variants={formItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className=' font-script leading-tight'>
          
        </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={rightSectionVariants}
        >

          <div className='font-secondary'>

            <motion.h1
            variants={formItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='xsm:text-[26px] lg:text-[32px] leading-tight'
          >
             Hello! I&apos;m a passionate Full Stack Developer.
          </motion.h1>
            <motion.p
            variants={formItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

          I enjoys building responsive, scalable, and Industry Standard Web applications
             
              My work reflects a deep love for clean code and thoughtful design.

I specialize in both front-end and back-end technologies including React, Node.js, and MongoDB,Express Js,Postgress,My Sql,Nest Js With a user-first mindset, I strive to create applications that not only function flawlessly but also look great across all devices.

I&rsquo;m always exploring new tech and methodologies, and I love collaborating on exciting projects that push the limits of what’s possible on the web.
            </motion.p>

          </div>

          <div className="flex gap-4 mt-10
        sm:justify-center 
        lg:justify-start
        ">
            <div><DownloadButton 
              title='Download Resume'
              text="xsm:text-[12px]"
            /></div>
            <div className="flex gap-4">
              <Link href='https://www.linkedin.com/in/bilal-bhatti-462668248/'>  <img src="/Images/linkedin_icon.svg" alt="linkedin" /></Link>
              <Link href='https://github.com/zabi2404'> <img src="/Images/github_icon.svg" alt="github" /></Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </>
  )
}


export default AboutmeHeader;