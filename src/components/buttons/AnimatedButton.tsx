'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

type AnimatedButtonProps = {
  title: string;
  href: string;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  fillClassName?: string;
};

const AnimatedButton = ({
  title,
  href,
  text,
  className,
  fillClassName,
}: AnimatedButtonProps) => {
  const [isMobile, setIsMobile] = useState(false);
  // const [isLaptop, setIsLaptop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = React.useRef<HTMLAnchorElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      // setIsLaptop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current;
    const fill = fillRef.current;

    if (!button || !fill) {
      return;
    }

    const buttonRect = button.getBoundingClientRect();
    const x = event.clientX - buttonRect.left - 12;
    const y = event.clientY - buttonRect.top - 12;

    gsap.killTweensOf(fill);
    gsap.to(fill, {
      x,
      y,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(fill, {
      scale: 24,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  };

  const handleMouseLeave = () => {
    const fill = fillRef.current;

    if (!fill) {
      return;
    }

    gsap.killTweensOf(fill);
    gsap.to(fill, {
      scale: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      className={`border-2 border-[#D3E97A]  relative overflow-hidden flex justify-center cursor-pointer items-center rounded-[100px] xsm:w-[163px] min-h-[48px] xsm:px-4 xsm:py-[5px] ${className ?? ''}`}
    >
      <div
        ref={fillRef}
        className={`absolute left-0 top-0 z-0 h-6 w-6 origin-center rounded-full bg-[#D3E97A] ${fillClassName ?? ''}`}
        style={{ transform: 'translate(0px, 0px) scale(0)' }}
      />

      <span
        className={`relative z-10 cursor-pointer duration-500 font-secondary font-bold flex items-center xsm:gap-2 md:gap-4 text-nowrap lg:text-[16px] ${isHovered ? 'text-black' : 'text-white'} ${text ?? ''}`}
      >
        {title}

        {/* <motion.div
          animate={{
            width: isHovered ? 35 : !isLaptop ? 35 : 10,
            height: isHovered ? 35 : !isLaptop ? 35 : 10,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="bg-[#D3E97A] rounded-full flex justify-center items-center"
        >
          <motion.div
            animate={{ scale: isHovered ? 1 : !isLaptop ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {icon}
          </motion.div>
        </motion.div> */}
      </span>
    </motion.a>
  );
};

export default AnimatedButton;