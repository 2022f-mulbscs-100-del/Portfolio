"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGripLines } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);



  return (



    <>
      {/*  Outer Wrapper */}
      <div className="transition-all duration-500 ease-in-out bg-[#0A0A0A]">


        <div className="flex justify-between items-center md:py-4 md:px-[108px] xsm:px-4 transition-padding duration-500
        xsm:pt-4
        ">

          <h1 className="font-script text-[32px] text-[#C7C7C7]">Zohaib</h1>


          <div className="hidden md:flex gap-8 font-third text-[16px]">
            <Link href="/" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/' ? 'text-white' : 'text-[#C7C7C7]'}`}>Home</Link>
            <Link href="/work" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/work' ? 'text-white' : 'text-[#C7C7C7]'}`}>Projects</Link>
            {/* <Link href="/workflows" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/workflows' ? 'text-white' : 'text-[#C7C7C7]'}`}>Workflows</Link> */}
              {/* <Link href="/mcp" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/mcp' ? 'text-white' : 'text-[#C7C7C7]'}`}>MCP</Link> */}
            <Link href="/about" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/about' ? 'text-white ' : 'text-[#C7C7C7]'}`}>About</Link>
            <Link href="/skills" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/skills' ? 'text-white ' : 'text-[#C7C7C7]'}`}>Skills</Link>
            <Link href="/contact" className={`transition-all duration-300 ${pathname === '/contact' ? 'text-white' : 'text-[#C7C7C7]'}`}> Contact</Link>
          </div>

          <div className='md:hidden' >
            <FaGripLines
              className=" text-2xl text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        {/* mobile view */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .7 }}
              className="fixed inset-0 z-50 bg-[#0A0A0A] flex h-screen justify-center items-center flex-col md:hidden"
            >
              <div className="flex flex-col items-center gap-4 text-[32px] font-third text-white">
                <Link href="/" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/' ? 'text-white' : 'text-[#C7C7C7]'}`}>Home</Link>
                <Link href="/work" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/work' ? 'text-white' : 'text-[#C7C7C7]'}`}>Projects</Link>
                {/* <Link href="/workflows" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/workflows' ? 'text-white' : 'text-[#C7C7C7]'}`}>Workflows</Link> */}
                  {/* <Link href="/mcp" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/mcp' ? 'text-white' : 'text-[#C7C7C7]'}`}>MCP</Link> */}
                <Link href="/about" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/about' ? 'text-white ' : 'text-[#C7C7C7]'}`}>About</Link>
                <Link href="/skills" onClick={() => setIsOpen(false)} className={`transition-all duration-300 ${pathname === '/skills' ? 'text-white ' : 'text-[#C7C7C7]'}`}>Skills</Link>
                <Link href="/contact" className={`transition-all duration-300 ${pathname === '/contact' ? 'text-white' : 'text-[#C7C7C7]'}`}> Contact</Link>
              </div>

              <div className="absolute top-7 right-5 text-2xl text-white cursor-pointer">
                <RxCross2 onClick={() => setIsOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>




      </div>
    </>
  );
};

export default Navbar;
