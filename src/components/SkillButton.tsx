"use client"

import React from 'react';
import { motion } from "framer-motion";

type SkillButtonProps = {
  title: string;
};


function SkillButton({ title }: SkillButtonProps) {


  // const [isMobile, setIsMobile] = useState(false);

  const tiltOptions = [-8, -5, 5, 8];
  const tiltSeed = title.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const tiltAngle = tiltOptions[tiltSeed % tiltOptions.length];

  // useEffect(() => {
  //   const handleResize = () => {
  //     // setIsMobile(window.innerWidth < 768);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (

    <>
      <div className='  font-secondary

  '>
        <motion.button
          className='cursor-pointer w-fit border border-[#484848] text-[#C7C7C7] font-secondary px-[24px] py-[16px] rounded-[100px]'
          whileHover={{ rotate: tiltAngle, y: -3, scale: 1.03 }}
          whileTap={{ rotate: 0, y: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
        >

          <motion.span
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='inline-block'>
            {title}
          </motion.span>

        </motion.button>
      </div>
    </>
  )
}

export default SkillButton