import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const WorkSecondSection = () => {

  const images = [
    {
      id: 1,
      src: "Images/naseebi.png",
      title: "Naaseebi",
      link: 'https://naseebi.com/en',
      description: 'This is Matremonial App on Which different user can find friends and Life-Partners with zero risk of data. This is totally Mern Project and i am working on it alone. Front end and Backend as well using Next Js, Nest Js and TypeScript'
    },
    {
      id: 2,
      src: "Images/faremakers.png",
      title: "Faremakers",
      link: 'https://www.faremakers.com/',
      description: 'This project is related to the FareBooking and Flights booking purposes. In this the user can search select its flights with its giving requirement then if confirm then he can book it. Im working on it Front end and Backend as well using Mern Stack'
    },
    {
      id: 3,
      src: "Images/aquarlink.png",
      title: "AqarLink",
      link: 'https://aqarlink-frontend.up.railway.app/',
      description: 'A multi-role restaurant app built with VibeCoding. Features Customer, Admin, and SuperAdmin roles with comprehensive restaurant management, menu ordering, order tracking, and administrative controls for seamless dining operations.'
    },
  ];
  // const [isLaptop, setIsLaptop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);


  // useEffect(() => {

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 480);
  //     setIsLaptop(window.innerWidth >= 1024);
  //   };
  //   handleResize(); // Run on mount
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>

      {/* feature heading */}
      <div className=" 
   min-[1140]:w-[50%] 
   lg:mb-20 lg:py-40
   xsm:mb-16 xsm:w-[100%]
   text-center
     ">
        <motion.h1

          transition={{ duration: 1, ease: 'easeInOut' }}
          className="font-script text-[#FFFFFF] xsm:text-[58px] lg:text-[72px] leading-tight"
        >
          Featured Projects
        </motion.h1>

        <motion.p
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="font-secondary text-[18px] text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for front-end development.</motion.p>
      </div>

      {/* work */}
      <div className="w-full border-b border-[#484848]">

        {images.map((img) => (
          <React.Fragment key={img.id}>
            <div

              className=" relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${img.src})` }}
            >

              <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
              <motion.h1
                transition={{ duration: 1, ease: 'easeInOut' }}


                className="relative z-10 text-white drop-shadow-lg top-[-190px] font-script text-center xsm:text-[58px] lg:text-[72px] leading-tight">

                {img.title}
              </motion.h1>

            </div>

            <div className='relative top-[30px]'>
              <div className="absolute z-10  drop-shadow-lg px-20  
                md:top-[-440px]
                sm:top-[-430px]
                lg:top-[-450px]
                xsm:top-[-420px]
                font-script text-center">
                <motion.p
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className=' font-secondary text-[#C7C7C7] 
                                        '>{img.description}</motion.p>
              </div>

            </div>

            <div className="w-[full] relative  h-[100px] bg-[#0A0A0A] text-center px-40 items-center flex flex-col justify-center">

              <div className='flex   gap-6'>
                <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4] after:h-[2px] after:w-0 after:bg-[#D3E97A] after:transition-all after:duration-500 hover:after:w-full">
                  <div className='flex justify-end leading-none cursor-pointer text-[16px] text-[#D3E97A] font-bold font-secondary gap-1'>
                    <Link href={img.link}>
                      <p className='text-nowrap'>LIVE DEMO </p>
                    </Link>
                    <FaArrowLeft className='rotate-135' />
                  </div>
                </div>
                <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4] after:h-[2px] after:w-0 after:bg-[#D3E97A] after:transition-all after:duration-500 hover:after:w-full">
                  <div className='flex justify-end leading-none cursor-pointer   text-[16px] text-[#D3E97A] font-bold font-secondary gap-1'> <Link href='https://github.com/zabi2404'><p className='text-nowrap'>See on Github</p></Link><FaGithub /></div>
                </div>
              </div>
            </div>

          </React.Fragment>

        ))}
        
      </div>

    </>
  )
}


export default WorkSecondSection;