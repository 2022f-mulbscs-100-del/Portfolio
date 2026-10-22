'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const TEXT = 'FULL-STACK DEVELOPER • MERN • NEXT.JS • TYPESCRIPT • ';

const RotatingBadge = () => (
  <div className="relative h-[220px] w-[220px] lg:h-[260px] lg:w-[260px]">
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute inset-0 h-full w-full text-white/70"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      <defs>
        <path id="badge-circle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
      </defs>
      <text fill="currentColor" fontSize="11" className="uppercase">
        <textPath href="#badge-circle" textLength="500" lengthAdjust="spacing">
          {TEXT}
        </textPath>
      </text>
    </motion.svg>

    <div className="absolute inset-[22%] overflow-hidden rounded-full border border-white/10 bg-white/5">
      <Image
        src="/me.jpg"
        alt="Zohaib"
        fill
        className="object-cover grayscale transition duration-500 hover:grayscale-0"
      />
    </div>

    <span className="absolute right-[10%] top-[14%] h-3 w-3 rounded-full bg-[#d9ef8a]" />
  </div>
);

export default RotatingBadge;
