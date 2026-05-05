"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubmitButton from "./buttons/SubmitButton";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { IoRocket } from "react-icons/io5";

const Connect = () => {

 
  const [inputData, setInputData]=useState({
    yourName:"",
yourEmail:"",
subject:"",
message:""
  }

    
  )

  const onChangeInputHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const{name,value} =event.target
   
// setInputData({...inputData,[event.target.name]:event.target.value})
   setInputData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
console.log(
  inputData
)


const handleForm = (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

console.log('subbmitted')
notfiy();
axios.post(
  'https://mailer-wine.vercel.app/api/contact',
  inputData
)
.then((Response)=>{
  console.log(Response)
})

setInputData({
   yourName:"",
yourEmail:"",
subject:"",
message:""
});
}

const notfiy =()=>{
  toast("Subbmitted!", {
  position: "top-right",      // or "bottom-right", "top-left", etc.
  autoClose: 2000,             // duration in ms
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  type: "success",             // "info", "success", "warning", "error"
  theme: "dark",               // "light", "dark", "colored"
    icon:<IoRocket className="text-[#D3E97A] rotate-270" />

});
}
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
    

            setIsMobile(window.innerWidth <= 480);
            setIsLaptop(window.innerWidth >= 1024);
         
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55 },
    },
  };


  return (
    <>

      <div className='grid 
    lg:grid-cols-2 lg:px-[108px] lg:pt-20 
    xsm:grid-cols-1 xsm:px-4 xsm:pt-16   xsm:gap-16
transition-padding duration-700 
pb-20
border-b border-[#484848]
    '>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={leftSectionVariants}
          className='flex flex-col justify-between
        lg:text-start
    sm:text-center'>
          <div>

            <div className="">
              <motion.h1
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="font-script xsm:text-[58px] lg:text-[72px] leading-tight"
              >LET&apos;S CONNECT</motion.h1>


              <motion.p
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-[18px] text-[#C7C7C7] lg:w-[55%]"
              >Say hello at {" "}
              <Link  href="mailto:zohaib24a@gmail.com?subject=Hello%20Bilal&body=Hi%20Bilal,%20I%20wanted%20to%20connect%20with%20you%20regarding...">
               <span className="text-white border-b border-[#D3E97A] cursor-pointer">zohaib24a@gmail.com</span>
              </Link>
               
               {" "} For more info, here&rsquo;s my <span className="text-white border-b border-[#D3E97A] cursor-pointer">
                <a download href="Full_Stack_Dev_Applicant.pdf">Resume</a>
               </span>
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex mt-10 gap-7  text-[#D3E97A]
            lg:justify-start lg:items-start
            sm:justify-center sm:items-center

            ">
              <Link href="https://www.linkedin.com/in/bilal-bhatti-462668248/">
                <FaLinkedinIn className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
              <Link href='https://github.com/zabi2404'>
                <FaGithub className="w-[30px] h-[30px] cursor-pointer" />
              </Link >
              <Link href=''>
                <FaXTwitter className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
              <Link href=''>
                <FaInstagram className="w-[30px] h-[30px] cursor-pointer" />
              </Link>



            </motion.div>

          </div>
          
        </motion.div>

        <motion.div
          className="pt-4 "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightSectionVariants}
        >

          <motion.form action="submit" onSubmit={handleForm}>


            <motion.div className='mb-6' variants={formItemVariants}>
              <h1 className="mb-1.5 font-secondary text-[16px] text-[#C7C7C7]">Your Name</h1>
              <div className="bg-[#1A1A1A] py-3 px-4  rounded-[4px]">

                <input onChange={onChangeInputHandler} className="w-full outline-0" type="text" name="yourName" id="" value={inputData.yourName} required />
              </div>
            </motion.div>

            <motion.div className='mb-6' variants={formItemVariants}>
              <h1 className="mb-1.5 font-secondary text-[16px] text-[#C7C7C7]">Your Email</h1>
              <div className="bg-[#1A1A1A] py-3 px-4 rounded-[4px]">

                <input onChange={onChangeInputHandler} className="w-full outline-0" type="email" name="yourEmail" value={inputData.yourEmail} id="" required />
              </div>
            </motion.div>

            <motion.div className='mb-6' variants={formItemVariants}>
              <h1 className="mb-1.5 font-secondary text-[16px] text-[#C7C7C7]">Subject</h1>
              <div className="bg-[#1A1A1A] py-3 px-4 rounded-[4px]">

                <input onChange={onChangeInputHandler} className="w-full outline-0" type="text" name="subject" value={inputData.subject} id=""  required/>
              </div>

            </motion.div>
            <motion.div className='mb-6' variants={formItemVariants}>
              <h1 className="mb-1.5 font-secondary text-[16px] text-[#C7C7C7]">Message</h1>
              <div className="bg-[#1A1A1A] py-3 px-4 rounded-[4px]">

                <textarea onChange={onChangeInputHandler} className="w-full outline-0" name="message" rows={6} value={inputData.message} id="" required></textarea>
              </div>

            </motion.div>

            <motion.div
              variants={formItemVariants}
              className="flex 
              lg:justify-start lg:items-start
            sm:justify-center sm:items-center
            ">
              <SubmitButton 
              
              title='Submit'

              />
             
              <ToastContainer/>
            
            </motion.div>
           
          </motion.form> 


        </motion.div>

      </div>
      
    </>
  )
}

export default Connect;                   