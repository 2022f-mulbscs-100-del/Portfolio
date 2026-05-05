'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// const words = [
//   // { first: 'hi, i am zohaib', second: '' },
//   { first: 'a full', second: 'stack developer' },
//   { first: 'a mern', second: 'stack developer' },
// ];
const words = [
  { first: 'build things for the web', },
  { first: 'turn ideas into products' },
  { first: 'write code that scales' },
];
// const wordsSingleLine = [
//   // { line: 'hi, i am zohaib' },
//   { line: 'a full stack developer' },
//   { line: 'a mern stack developer' },
// ];

const AnimatedLineHeading = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(false);
  // const [showSecond, setShowSecond] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    const runSequence = async () => {
      if (isCancelled) return;

      const hasSecond = !!words[currentIndex];

      setShowFirst(true);
      // setShowSecond(false);
      await wait(3000);
      if (isCancelled) return;

      if (hasSecond) {
        // setShowSecond(true);
        await wait(3000);
        if (isCancelled) return;

        // setShowSecond(false);
        await wait(3000);
        if (isCancelled) return;
      }

      setShowFirst(false);
      await wait(3000);
      if (isCancelled) return;

      setCurrentIndex((prev) => (prev + 1) % words.length);
      setRenderKey((prev) => prev + 1);

      runSequence();
    };

    runSequence();
    return () => {
      isCancelled = true;
    };
  }, [currentIndex]);
 

  const isXSM = windowWidth <= 480;
  // const isSM = windowWidth > 480 && windowWidth < 1024;
  const isLG = windowWidth >= 1024;
  const isIntroLine = words[currentIndex].first === 'hi, i am zohaib';

 
  if (isXSM || isLG) {
  return (
    <div
      className="h-[50px] flex lg:flex-col justify-center overflow-hidden 
        lg:gap-y-10 lg:w-[700px] 
       xsm:w-[300px] xsm:gap-y-2  xsm:flex-col
        sm:flex-row sm:gap-x-[] sm:w-[390px] 
        
        "
        
    >
      {/* First Line */}
      <div className={`h-[50px] flex items-center ${isIntroLine ? 'lg:min-w-[480px]' : 'lg:min-w-[350px]'} 
      sm:max-w-[240px] 
      xsm:w-[230px]`}>
        <AnimatePresence mode="wait">
          {showFirst && (
            <motion.div
              key={`first-${renderKey}`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className="font-script whitespace-nowrap overflow-hidden lg:text-[40px] xsm:text-[30px]"
            >
              {words[currentIndex].first}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Second Line */}
      {/* <div className="h-[50px] flex items-center 
      xsm:w-[280px]
      sm:max-w-[280px] lg:min-w-[600px]  ">
        <AnimatePresence mode="wait">
          {showSecond && words[currentIndex].second && (
            <motion.div
              key={`second-${renderKey}`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className="font-script whitespace-nowrap overflow-hidden lg:text-[101px] xsm:text-[50px]"
            >
              {words[currentIndex].second}
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
        )

  }
 

  return (
    <div className="h-[50px] flex items-center sm:w-[390px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`single-${renderKey}`}
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          exit={{ width: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="font-script whitespace-nowrap overflow-hidden text-[40px]"
        >
          {/* {wordsSingleLine[currentIndex].line} */}
        </motion.div>
      </AnimatePresence>
    </div>
  );



};
export default AnimatedLineHeading;
