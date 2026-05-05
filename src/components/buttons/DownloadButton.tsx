'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FiDownload } from "react-icons/fi";

type ButtonProps = {
  title: string;
  text?: string;
  link?: string;
};

const DownloadButton = ({ title, text, link }: ButtonProps) => {
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
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className={`bg-[#D3E97A] flex justify-center items-center rounded-[100px]   
                 xsm:w-[163px] min-h-[48px] xsm:px-4 xsm:py-[5px]`}
    >
      <button
        ref={buttonRef}
        className={`cursor-pointer text-black font-secondary font-bold flex items-center xsm:gap-2 text-nowrap lg:text-[16px] ${text && text}`}
      >
        <a download href="Full_Stack_Dev_Applicant.pdf">
          {title}
        </a>

        <motion.div
          animate={{
            width: isHovered ? 35 : (!isLaptop ? 35 : 10),
            height: isHovered ? 35 : (!isLaptop ? 35 : 10),
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="bg-black rounded-full flex justify-center items-center"
        >
          <motion.div
            animate={{ scale: isHovered ? 1 : (!isLaptop ? 1 : 0) }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {pathname === '/about' && (
              <FiDownload className='text-white h-[20px] w-[20px]' />
            )}
          </motion.div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default DownloadButton;
