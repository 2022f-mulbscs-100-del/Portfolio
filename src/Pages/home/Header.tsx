"use client"

import React, { useEffect, useRef, useState } from 'react';
import { wrapGrid } from 'animate-css-grid';
import Link from 'next/link';
import { motion } from "framer-motion";
import Button from "@/components/buttons/button";
import AnimatedLineHeading from '@/components/AnimatedLineHeading';

const Header = () => {

  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current, {
        duration: 1000,
        easing: 'easeInOut',
      });
    }
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

      <div
        ref={gridRef}

        className={`grid  auto-rows-auto  pb-20 items-center  border-b border-[#484848]

  min-[1250px]:grid-cols-2 sm:grid-cols-1
  lg:px-[108px] lg:pt-8 min-[1250px]:text-start
  sm:text-center
 xsm:px-2 xsm:gap-20 xsm:pt-10
  transition-padding 
   transition-all
  `
        }   >
        {/* image  */}
        <motion.div initial={"hidden"} viewport={{ once: false, amount: 0.25 }} whileInView="show" variants={leftSectionVariants} className='h-[100%] flex justify-center min-[1250px]:justify-end overflow-hidden'>

          <img
            src="https://capsule-render.vercel.app/api?type=venom&height=260&color=0:000000,100:a371f7&text=Zohaib%20Ali&fontSize=68&fontColor=FFFFFF&animation=fadeIn&fontAlignY=40&desc=Full%20stack%20Mern%20Developer&descSize=24&descColor=FFFFFF&descAlignY=65"
            className="w-full max-w-[820px] min-[1250px]:max-w-[980px] min-[1250px]:scale-[1.18] origin-right"
            alt="Zohaib Ali banner"
          />
        </motion.div>

        {/* Heading section */}
        <motion.div initial={"hidden"} whileInView="show" viewport={{ once: false, amount: 0.25 }} variants={rightSectionVariants} className="flex items-center  ">
          <div className="flex flex-col sm:w-full" >

            {/* heading and description */}
            <div className='sm:flex 
          sm:justify-center sm:items-center 
          min-[1250px]:justify-start min-[1250px]:items-start 
          '>

              <div className='
            sm:max-w-full
            lg:w-[70%]
            '>

                <motion.div initial={"hidden"} whileInView="show" viewport={{ once: false, amount: 0.25 }} variants={formItemVariants} className="inline-block sm:text-start leading-none lg:h-[50px]
               lg:w-[600px]  
               sm:h-[60px]
               xsm:w-[300px] 
          
              " >

                  <AnimatedLineHeading />



                </motion.div>

                <motion.p
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}

                  className="text-[#C7C7C7] md:text-[18px] font-secondary
        
        xsm:text-[16px]
        ">
                  I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js), with strong expertise in Next.js, TypeScript, and modern JavaScript libraries.

                </motion.p>
              </div>

            </div>

            {/* contact me button with logo */}
            <div className="flex gap-4 mt-10  items-center
          sm:justify-center 
          min-[1250px]:justify-start
          ">
              <div><Button
                title='Contact Me'

              /></div>
              <div className="flex gap-4">
                <Link href=''>

                  <img src="/Images/linkedin_icon.svg" alt="linkedin" /></Link>
                <Link href='https://github.com/zabi2404'> <img src="/Images/github_icon.svg" alt="github" /></Link>
              </div>
            </div>

          </div>
        </motion.div>




      </div>
    </>
  )
}


export default Header;

















