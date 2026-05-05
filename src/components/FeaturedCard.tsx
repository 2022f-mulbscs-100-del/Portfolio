import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';


type FeaturedCardProps ={
    Image:string;
    buttonTitle:string;
title:string;
description:string;
year:number;
role:string;
link:string;
Company:string;
}

const FeaturedCard = ({ Image, buttonTitle, title, description, year, role,link,Company }:FeaturedCardProps) => {
    
      const [isLaptop, setIsLaptop] = useState(false);
     const [isMobile, setIsMobile] = useState(false);
    
     useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    
    
    return (

        <>
            <div className='grid  appear
   lg:grid-cols-2 lg:gap-12 lg:mb-[120px] 
   xsm:grid-cols-1 xsm:gap-10 xsm:mb-24

   '>
                {/* leftside */}
                <div className='flex 
               xsm:justify-center
               lg:justify-start
                ' >
                    <div className='bg-[#1A1A1A] relative  rounded-[12px] overflow-hidden transition-padding duration-500
                    lg:py-32 min-[1200px]:px-14
                    lg:px-7
                    xsm:pt-10 xsm:px-7
                    
                     
                    '>
                        <div className='absolute bg-[#0A0A0A] rounded-[100px] z-50
                        lg:py-2 lg:px-4 lg:top-4 lg:left-4
                        xsm:py-1.5 xsm:px-3 xsm:top-2.5 xsm:left-2.5 
                       
                        '>
                            {buttonTitle}
                        </div>

                        <div className=' transition duration-500 '>
                            <img
                                className='rounded-[12px] transition-transform duration-1000 ease-in-out hover:scale-200'
                                src={Image} alt="" />
                        </div>
                    </div>

                </div>


                {/* rightside */}

                <div className='flex items-center'>
 
                    <div>

                        <div>
                            <motion.h1
                                transition={{ duration: 1, ease: 'easeInOut' }}

                                className='font-secondary font-bold xsm:text-[26px] lg:text-[32px] leading-tight'>{title}</motion.h1>
                            <motion.p 
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            className=' font-secondary text-[#C7C7C7] 
                            '>{description}</motion.p>
                        </div>

                        <div className='mt-8'>

                            <div className='flex items-center border-b border-[#484848] text-[16px] py-4'>
                                <p>PROJECT INFO</p>
                            </div>
                             <div className='flex justify-between items-center border-b border-[#484848] py-4 text-end'>
                                <p>Company</p>
                                <p className='text-[#C7C7C7]'>{Company}</p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#484848] py-4'>
                                <p>Year</p>
                                <p className='text-[#C7C7C7]'>{year}</p>
                            </div>
                            <div className='flex justify-between items-center border-b border-[#484848] py-4'>
                                <p>Role</p>
                                <p className='text-[#C7C7C7]'>{role}</p>
                            </div>


                        </div>

                        <div>

                        </div>

                        <div className='flex mt-12  gap-6'>
                            <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#D3E97A] after:transition-all after:duration-500 hover:after:w-full">
                         <motion.div
  className="relative flex cursor-pointer justify-end items-center gap-1 text-[16px] text-[#D3E97A] font-bold font-secondary "
>
  <Link href={link || "#"} target="_blank">
  <p> LIVE DEMO
  </p>
  </Link >
  <FaArrowLeft className="rotate-[135deg]" />
</motion.div>  

</div>

  <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#D3E97A] after:transition-all after:duration-500 hover:after:w-full">
<div className='flex cursor-pointer justify-end leading-none  text-[16px] text-[#D3E97A] font-bold font-secondary gap-1'> 
    <Link href="https://github.com/zabi2404"> <p>See on Github</p></Link>
    <FaGithub />
    </div>
    </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default FeaturedCard;