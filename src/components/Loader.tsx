'use client';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
        className="w-12 h-12 border-4 border-[#D3E97A] border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;
