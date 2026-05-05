import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import SkillButton from '@/components/SkillButton';
const SkillSecondSection = () => {

  const skillPills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Bootstrap",
    "Material UI",
    "Node.js",
    "Express",
    "Nest.js",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Firebase",
    "Supabase",
    "Git",
    "Docker",
    "Postman",
    "n8n",
    "MCP"
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [isClicked, setIsClicked] = useState(false);
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

      <div className='   grid border-b border-[#484848]
  lg:grid-cols-2 lg:px-[108px] lg:py-20 lg:text-start
  sm:text-center
xsm:grid-col-1
xsm:px-2 xsm:gap-4 '>





        <div>
          <img
            src="https://capsule-render.vercel.app/api?type=venom&height=260&color=0:000000,100:a371f7&text=Capabilities&fontSize=68&fontColor=FFFFFF&animation=fadeIn&fontAlignY=40&descAlignY=65"
            className="w-full max-w-[820px] min-[1250px]:max-w-[980px] min-[1250px]:scale-[1.18] origin-right"
            alt="Zohaib Ali banner"
          />

          {/* <motion.h1
            transition={{ duration: 1, ease: 'easeInOut' }}
            className=' font-script leading-tight whitespace-nowrap'>
            
          </motion.h1> */}
        </div>

        <div className=''>

          <div  >
            <motion.p
              transition={{ duration: 1, ease: 'easeInOut' }}

              className=' text-[#C7C7C7] font-secondary '>
              I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
            </motion.p>
          </div>

          {/* skill button */}
          <motion.div
            onClick={() => { setIsClicked(true) }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={container}
            className='flex flex-wrap 
lg:gap-[16px] lg:py-8 lg:justify-start lg:items-start
sm:justify-center sm:items-center
xsm:gap-[12px] xsm:py-6
'>
            {skillPills.map((skill) => (
              <motion.div key={skill} variants={item}>
                <SkillButton title={skill} />
              </motion.div>
            ))}

          </motion.div>

        </div>




      </div>

    </>
  )
}


export default SkillSecondSection;