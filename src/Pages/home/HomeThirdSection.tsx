"use client"

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { wrapGrid } from 'animate-css-grid';
import Link from "next/link";

 const HomeThirdSection = () => {
  
     const [isMobile, setIsMobile] = useState(false);
      const [isLaptop, setIsLaptop] = useState(false);
     const gridRef = useRef<HTMLDivElement>(null);
    
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
      
  
    return (
   <>
         <div

 ref={gridRef}
        className={`grid   pb-20  
           ${isLaptop ? 'grid-cols-2' : 'grid-cols-1'}
  xsm:grid-cols-1 lg:grid-cols-[45%_55%]
  lg:pt-40 lg:pb-[120px] lg:px-[108px] lg:text-start
   sm:text-center
  xsm:pt-10 xsm:pb-20  xsm:px-4 
  transition-padding duration-700
 border-b border-t border-[#484848]
 transition-all  grid-auto-rows
         
  `
        }   >

        <div className="flex sm:justify-center xsm:justify-start">
          <div>
          <motion.h1
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='font-script leading-tight xsm:text-[58px] lg:text-[72px]'>
            About me
          </motion.h1>
        </div>
        </div>

        <div>

          <div className='font-secondary 
        '>

            <motion.h1
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='xsm:text-[26px] lg:text-[32px] leading-tight'
            >
              Hello! I&apos;m a passionate Full Stack Developer.
            </motion.h1>
            <motion.p
              transition={{ duration: 1, ease: 'easeInOut' }}

              className=' text-[#C7C7C7] '>
I enjoys building responsive, scalable, and Industry Standard Web applications
             
              My work reflects a deep love for clean code and thoughtful design.

I specialize in both front-end and back-end technologies including React, Node.js, and MongoDB,Express Js,Postgress,My Sql,Nest Js With a user-first mindset, I strive to create applications that not only function flawlessly but also look great across all devices.

I&rsquo;m always exploring new tech and methodologies, and I love collaborating on exciting projects that push the limits of what’s possible on the web.
             </motion.p>
          <div className="flex
                  sm:justify-center sm:items-center
            lg:justify-start lg:items-start
          ">
             <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#D3E97A] after:transition-all after:duration-500 hover:after:w-full">
 <div className="text-[#D3E97A]  cursor-pointer text-[16px]  pt-[53px] flex
    
            "> 
           <Link href="/about">
             MORE ABOUT ME 
           </Link>
            </div>
             </div>
          </div>
           

          </div>


        </div>

      </div>
   
   </>
  )
}

export default HomeThirdSection;