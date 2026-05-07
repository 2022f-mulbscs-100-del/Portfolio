"use client"

import React from 'react';
import { motion } from "framer-motion";

 const AboutMeThirdSection = () => {

//  const [isLaptop, setIsLaptop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 480);
//       setIsLaptop(window.innerWidth >= 1024);
//     };
//     handleResize(); 
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

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
 
 <div className='grid border-b border-t border-[#484848]
lg:pt-20 xsm:pt-16 lg:grid-cols-2  lg:text-start
xsm:pb-16 xsm:grid-cols-1 
sm:text-center
'>
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={leftSectionVariants}
>
 <motion.h1
          variants={formItemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
           transition={{ duration: 1, ease: 'easeInOut' }}
          className='font-script leading-tight xsm:text-[58px] lg:text-[72px]'>
         My Experience
        </motion.h1>
</motion.div>

<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={rightSectionVariants}
>

 <motion.div
  variants={formItemVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
 className='font-secondary 
 lg:pb-20
 xsm:pb-10 xsm:pt-8
 '>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between  lg:items-center  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

       <div>
           <motion.h1
            variants={formItemVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.25 }}
               transition={{ duration: 1, ease: 'easeInOut' }}
               className='font-secondary xsm:text-[26px] lg:text-[32px]'
          >
           MERN Stack Developer

          </motion.h1>
            <motion.p
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className='text-[#D3E97A] font-secondary xsm:text-[17px] lg:text-[18px]'>
Webbuggs
         </motion.p>
       </div>

           <motion.p
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className='text-[#C7C7C7] font-secondary xsm:text-[17px] lg:text-[18px]'>
Aug 2025 - May 2026
         </motion.p>


</div>
          <motion.p
            variants={formItemVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.25 }}
               transition={{ duration: 1, ease: 'easeInOut' }}

            className='text-[#C7C7C7] xsm:text-[17px] lg:text-[18px] leading-[1.7]'>

           Worked as a MERN Stack Developer contributing to multiple real-world projects in different capacities — as a frontend developer and as a full-stack developer. Contributed to projects including PSX and Invoice Generator web applications, built and maintained features using React, Node.js, Express, and MongoDB, with focus on clean UI and functional backend integration.
           </motion.p>

        </motion.div>

      <motion.div
        variants={formItemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      className='font-secondary
 lg:pb-20
 xsm:pb-10 xsm:pt-8
'>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between lg:items-center  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

         <div>
           <motion.h1
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
               transition={{ duration: 1, ease: 'easeInOut' }}
              className='font-secondary xsm:text-[26px] lg:text-[32px]'
          >
        Front-End Intern
          </motion.h1>
           <motion.p
             variants={formItemVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className='text-[#D3E97A] font-secondary xsm:text-[17px] lg:text-[18px]'>
Meta Melon
         </motion.p>
         </div>

           <motion.p
             variants={formItemVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

                className='text-[#C7C7C7] font-secondary xsm:text-[17px] lg:text-[18px]'>
             May 2025 - Jul 2025
         </motion.p>


</div>
          <motion.p
             variants={formItemVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className='text-[#C7C7C7] xsm:text-[17px] lg:text-[18px] leading-[1.7]'>

Worked as a Front-End Intern contributing to multiple real-world projects including a dynamic dashboard and portfolio website. Focused on building reusable React components, integrating APIs, optimizing UI responsiveness with Tailwind CSS, and enhancing user experience with animations using Framer Motion.
          </motion.p>

        </motion.div>

      </motion.div>
    </div>
 </>
  )
}


export default AboutMeThirdSection;