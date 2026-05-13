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
            description='A Google Keep-inspired note-taking app with a clean Masonry card UI, smooth animations, and a heavily secured backend. Features include JWT refresh token rotation, Google/GitHub OAuth2, MFA with TOTP, email OTP, WebAuthn passkeys, real-time note syncing, reminders, Stripe subscriptions, i18n, Swagger docs, and Docker support.'
            year={2025}
            role='Mern Stack Developer'
            link='https://keeper04.netlify.app/'
            Company="Personal Project"
            githubLink="https://github.com/2022f-mulbscs-100-del/Keep2"
            />

          <FeaturedCard
            Image='Images/relay.jpeg'
            buttonTitle='Socket.IO'
            title='Relay'
            description='A full-stack real-time chat application built with React and TypeScript. It includes instant messaging over Socket.IO, JWT-based authentication with secure session handling, a structured REST API backend in Node.js, and a monorepo setup separating frontend and backend concerns.'
            year={2025}
            role='Mern Stack Developer'
             link='https://relay-fc4p.onrender.com/'
             Company="Personal Project"
              githubLink="https://github.com/2022f-mulbscs-100-del/Relay-chatApp"
            />

          <FeaturedCard
            Image='Images/byeWind.jpeg'
            buttonTitle='Vibe Coded'
            title='Bye Wind'
            description='A multi-role restaurant app built with VibeCoding. Features Customer, Admin, and SuperAdmin roles with comprehensive restaurant management, menu ordering, order tracking, and administrative controls for seamless dining operations.'
            year={2026}
            role='Mern Stack Developer'
            link='#'
             Company="Personal Project"
             githubLink="https://github.com/2022f-mulbscs-100-del/Bye-wind"
          />



        </div>

      </div>
   </>
  )
}


export default HomeSecondSection;