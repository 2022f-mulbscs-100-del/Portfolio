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
   <section className="px-6 py-16 sm:py-20 lg:px-[7vw] lg:py-24">
        <header className="mx-auto mb-14 grid max-w-[1440px] gap-6 sm:mb-20 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D3E97A]">Selected work <span className="px-2 text-white/25">/</span> 01—03</p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-[clamp(3.75rem,8vw,6.5rem)] leading-[0.86]"
            >
              <span className="bg-gradient-to-b from-white via-[#c8cbd0] to-[#72777e] bg-clip-text text-transparent">Featured Projects</span>
              <span className="text-[#D3E97A]">.</span>
            </motion.h2>
          </div>
          <div className="flex items-end justify-between gap-6 pt-2">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg font-secondary text-base leading-7 text-[#A8A8A8] sm:text-lg"
            >A selection of products built with a focus on thoughtful interfaces, reliable systems, and useful details.</motion.p>
            <span className="shrink-0 pb-1 font-mono text-sm text-white/35">03 projects</span>
          </div>
        </header>
        {/* Cards */}
        <div>

          <FeaturedCard
            Image='Images/keeper.png'
            projectType='Note-taking app'
            highlights={['Masonry UI', 'Real-time sync', 'Passkeys']}
            title='Keeper'
            description='A Google Keep-inspired note-taking app with a clean Masonry card UI, smooth animations, and a heavily secured backend. Features include JWT refresh token rotation, Google/GitHub OAuth2, MFA with TOTP, email OTP, WebAuthn passkeys, real-time note syncing, reminders, Stripe subscriptions, i18n, Swagger docs, and Docker support.'
            link='https://keeper04.netlify.app/'
            githubLink="https://github.com/2022f-mulbscs-100-del/Keep2"
            />

          <FeaturedCard
            Image='Images/relay.jpeg'
            projectType='Real-time chat app'
            highlights={['Socket.IO', 'JWT auth', 'Monorepo']}
            title='Relay'
            description='A full-stack real-time chat application built with React and TypeScript. It includes instant messaging over Socket.IO, JWT-based authentication with secure session handling, a structured REST API backend in Node.js, and a monorepo setup separating frontend and backend concerns.'
             link='https://relay-fc4p.onrender.com/'
              githubLink="https://github.com/2022f-mulbscs-100-del/Relay-chatApp"
            />

          <FeaturedCard
            Image='Images/byeWind.jpeg'
            projectType='Restaurant platform'
            highlights={['Customer & admin roles', 'Menu ordering', 'Order tracking']}
            title='Bye Wind'
            description='A multi-role restaurant app built with VibeCoding. Features Customer, Admin, and SuperAdmin roles with comprehensive restaurant management, menu ordering, order tracking, and administrative controls for seamless dining operations.'
            link='#'
             githubLink="https://github.com/2022f-mulbscs-100-del/Bye-wind"
          />



        </div>

   </section>
  )
}


export default HomeSecondSection;
