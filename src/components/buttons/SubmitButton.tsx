'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa6';

type ButtonProps = {
  title: string;
  text?: string;
};

const SubmitButton = ({ title, text }: ButtonProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: 1,
        width: isMobile ? 163 : 187,
        height: isMobile ? 48 : 54,
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="bg-[#D3E97A] flex justify-center items-center rounded-[100px] overflow-hidden"
    >
      <button
        type="submit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full h-full cursor-pointer text-black font-secondary font-bold flex justify-center items-center xsm:gap-2 md:gap-4 text-nowrap lg:text-[16px] ${text || ''
          }`}
      >
        {title}

        <motion.div
          animate={{
            width: isHovered ? 35 : !isLaptop ? 35 : 10,
            height: isHovered ? 35 : !isLaptop ? 35 : 10,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-black rounded-full flex justify-center items-center"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1 : !isLaptop ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex justify-center items-center"
          >
            <FaPaperPlane className="text-white h-[16px] w-[16px] mr-[1px]" />
          </motion.div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default SubmitButton;