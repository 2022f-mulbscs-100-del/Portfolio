"use client"

import { motion } from "framer-motion";
import FeaturedCard from "@/components/FeaturedCard";

 const HomeSecondSection = () => {

    //  const [isMobile, setIsMobile] = useState(false);
    //   const [isLaptop, setIsLaptop] = useState(false);
    
    
    //   useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 480);
    //       setIsLaptop(window.innerWidth >= 1024);
    //     };
    //     handleResize(); // Run on mount
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []);

  return (
   <>
   <div
        className=" 
lg:px-[108px] lg:pt-8 lg:text-start
   sm:text-center
  xsm:px-4 xsm:gap-20 xsm:pt-10
"
      >
        <div className=" 
   min-[1140]:w-[50%] 
   lg:mb-20 
   xsm:mb-16 xsm:w-[100%]
     ">
          <motion.h1

            transition={{ duration: 1, ease: 'easeInOut' }}
            className="font-script text-[#FFFFFF] xsm:text-[58px] lg:text-[72px] leading-tight"
          >
            Featured Projects
          </motion.h1>

          <motion.p
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="font-secondary text-[18px] text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for Mern Stack Development.</motion.p>
        </div>
        {/* Cards */}
        <div className="appear">

          <FeaturedCard
            Image='Images/keeper.png'
            buttonTitle='Clone'
            title='Keeper'
            description='This is Matremonial App on Which different user can find friends and Life-Partners with zero risk of data. This is totally Mern Project and i am working on it alone. Front end and Backend as well using Next Js, Nest Js and TypeScript'
            year={2023}
            role='Mern Stack Developer'
            link='https://naseebi.com/en'
            Company="Byteimpulse Technology"
            />

          <FeaturedCard
            Image='Images/relay.jpeg'
            buttonTitle='Client Work'
            title='Relay'
            description='This project is related to the FareBooking and Flights booking purposes. In this the user can search select its flights with its giving requirement then if confirm then he can book it. Im working on it Front end and Backend as well using Mern Stack'
            year={2023}
            role='Mern Stack Developer'
             link='https://www.faremakers.com/'
             Company='Byteimpulse Technology'
            />

          <FeaturedCard
            Image='Images/byeWind.jpeg'
            buttonTitle='Vibe Coded'
            title='Bye Wind'
            description='This is an Industry standard Mern Stack Project in which we are handling the different properties like commercial and residency perspective user can upload its propery information. And according to its requirement user can make its property buy and sell'
            year={2022}
            role='Mern Stack Developer'
             link='https://aqarlink-frontend.up.railway.app/'
             Company="SWATI TECHNOLOGIES"
          />



        </div>

      </div>
   </>
  )
}


export default HomeSecondSection;