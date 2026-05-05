'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from "react-icons/fi";
import { usePathname } from 'next/navigation';


type ButtonProps = {
  title: string;
  text?: string;
};

const SubmitButton = ({ title, text }: ButtonProps) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const mouseHover = () => setIsHovered(true);
    const mouseLeave = () => setIsHovered(false);

    if (button) {
      button.addEventListener('mouseenter', mouseHover);
      button.addEventListener('mouseleave', mouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', mouseHover);
        button.removeEventListener('mouseleave', mouseLeave);
      }
    };
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
      className="bg-[#D3E97A] flex justify-center items-center rounded-[100px] xsm:w-[163px] min-h-[48px] xsm:px-4 xsm:py-[5px]"
    >
      <button type='submit'
        ref={buttonRef}
        className={`cursor-pointer text-black font-secondary font-bold flex items-center xsm:gap-2 md:gap-4 text-nowrap lg:text-[16px] ${text && text}`}
      >
        {title}

        <motion.div
          animate={{
            width: isHovered ? 35 : (!isLaptop ? 35 : 10),
            height: isHovered ? 35 : (!isLaptop ? 35 : 10),
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="bg-black rounded-full flex justify-center items-center"
        >
          <motion.div
            animate={{ scale: isHovered ? 1 : (!isLaptop ? 1 : 0) }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FiDownload className="text-white h-[20px] w-[20px] rotate-180" />
          </motion.div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default SubmitButton;
