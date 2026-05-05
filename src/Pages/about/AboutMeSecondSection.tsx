"use client"

import React from 'react';
import { motion } from "framer-motion";


 const AboutMeSecondSection = () => {

    //  const [isLaptop, setIsLaptop] = useState(false);
    //   const [isMobile, setIsMobile] = useState(false);
    
    //   useEffect(() => {
    //     const handleResize = () => {
    //       // // setIsMobile(window.innerWidth <= 480);
    //       // setIsLaptop(window.innerWidth >= 1024);
    //     };
    //     handleResize(); // Run on mount
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
lg:pt-20 xsm:pt-16 lg:grid-cols-2 lg:text-start
xsm:pb-16 xsm:grid-cols-1 
sm:text-center

'>
<motion.div

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
         My Education
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
lg:pb-4 lg:flex-row lg:justify-between  lg:items-end  
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
           Bachelor of Computer Science
          </motion.h1>
           <motion.p
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
Minhaj University
         </motion.p>
        </div>

           <motion.p
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2023 – 2027 (Ongoing)
         </motion.p>


</div>
          <motion.p
            variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
               transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

          Focused on web development, software engineering, and data structures.</motion.p>

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
         Intermediate in ICS
          </motion.h1>
            <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
Civil Lines College
         </motion.p>
        </div>

           <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2021 – 2023
         </motion.p>


</div>
          <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

Studied Intermediate in ICS with a focus on computer science.

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
          Matriculation in Computer Science (Private)
          </motion.h1>

               <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
Private Candidate
         </motion.p>

          </div>

           <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2019 – 2021
         </motion.p>


</div>
          <motion.p
             variants={formItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>
Completed matriculation privately with a computer science background.
</motion.p>

        </motion.div>
        
      </motion.div>
    </div>
    
    </>
  )
}


export default AboutMeSecondSection