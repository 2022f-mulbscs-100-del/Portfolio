import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const WorkHeader = () => {

  const [isLaptop, setIsLaptop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {

    const handleResize = () => {
      // setIsMobile(window.innerWidth <= 480);
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


      <div className='  border-b border[#484848]
    lg:px-[108px]
xsm:px-4 xsm:gap-4
   '>
        <motion.div

          className={`grid   pb-20  
  ${isLaptop ? "grid-cols-2" : "grid-cols-1"} 
  lg:pt-40 lg:pb-[120px] lg:text-start
  xsm:pt-10 xsm:pb-20
  transition-padding duration-700
 sm:text-center
  `
          }   >

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={leftSectionVariants}
          >
            <img
              src="https://capsule-render.vercel.app/api?type=venom&height=260&color=0:000000,100:a371f7&text=Work&fontSize=68&fontColor=FFFFFF&animation=fadeIn&fontAlignY=40&descAlignY=65"
              className="w-full max-w-[820px] min-[1250px]:max-w-[980px] min-[1250px]:scale-[1.18] origin-right"
              alt="Zohaib Ali banner"
            />
            {/* <motion.h1
              transition={{ duration: 1, ease: 'easeInOut' }}
              className=' font-script leading-tight'>
              My Work
            </motion.h1> */}
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
                I am a Full stack  developer
              </motion.h1>
              <motion.p
                variants={formItemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}

                className='text-[#C7C7C7] xsm:text-[17px] lg:text-[18px] leading-[1.7]'>

                I have  3 years of experience as a Full Stack Developer, working extensively with the MERN stack. I’ve built scalable and performance-driven web applications using React.js, Next.js, Node.js, and Express.js, along with MongoDB and MySQL. I’ve also developed mobile app backends for React Native, focusing on efficient API design and seamless integration. My work involved close collaboration with cross-functional teams to deliver high-quality, user-focused solutions.</motion.p>

            </div>


          </motion.div>

        </motion.div>

      </div>

    </>
  )
}


export default WorkHeader;