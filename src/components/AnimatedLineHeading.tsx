'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'build things for the web',
  'turn ideas into products',
  'write code that scales',
];

const DURATION = 6; // full animation (seconds)

const AnimatedLineHeading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    // first swap at 50% of the animation (width = 0), then every full cycle
    const timeout = window.setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % words.length);

      interval = window.setInterval(() => {
        setCurrentIndex((i) => (i + 1) % words.length);
      }, DURATION * 1000);
    }, (DURATION / 2) * 1000);

    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-full min-h-[58px] w-full overflow-hidden lg:min-h-[64px]">
      <motion.div
        animate={{ width: ['100%', '0%', '100%'] }}
        transition={{
          duration: DURATION,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="whitespace-nowrap overflow-hidden font-script text-[clamp(1.75rem,3vw,2.5rem)] leading-tight"
      >
        {words[currentIndex]}
      </motion.div>
    </div>
  );
};

export default AnimatedLineHeading;