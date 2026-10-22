"use client"
import {  useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubmitButton from "./buttons/SubmitButton";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import { IoRocket } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

type ConnectProps = {
  showBackLink?: boolean;
};

const Connect = ({ showBackLink = false }: ConnectProps) => {
  const [inputData, setInputData] = useState({
    yourName: "",
    yourEmail: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    emailjs.init("8xIzQWPjEVgq1nTsY");
  }, []);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const stateKeyMap: Record<string, keyof typeof inputData> = {
      from_name: "yourName",
      from_email: "yourEmail",
      subject: "subject",
      message: "message",
    };
    const stateKey = stateKeyMap[name];

    if (!stateKey) return;

    setInputData(prevValue => {
      return {
        ...prevValue,
        [stateKey]: value
      };
    });
  }



  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_z7aq8ca",
        "template_6gud9ea",
        {
          from_name: inputData.yourName,
          from_email: inputData.yourEmail,
          subject: inputData.subject,
          message: inputData.message,
          name: inputData.yourName,
          time: new Date().toLocaleString(),
        }
      );

      console.log("Email sent!", result.text);
      notifySuccess();

      setInputData({
        yourName: "",
        yourEmail: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      notifyError();
    }
  }

  const notifySuccess = () => {
    toast("Submitted!", {
      position: "top-right",      // or "bottom-right", "top-left", etc.
      autoClose: 2000,             // duration in ms
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      type: "success",             // "info", "success", "warning", "error"
      theme: "dark",               // "light", "dark", "colored"
      icon: <IoRocket className="text-[#D3E97A] rotate-270" />

    });
  }

  const notifyError = () => {
    toast("Failed to send message. Please try again.", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      type: "error",
      theme: "dark",
    });
  }
  // const [isMobile, setIsMobile] = useState(false);
  // const [isLaptop, setIsLaptop] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {


  //     setIsMobile(window.innerWidth <= 480);
  //     setIsLaptop(window.innerWidth >= 1024);

  //   };
  //   handleResize(); // Run on mount
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.22, staggerChildren: 0.09 },
    },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 72, scale: 0.97 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };


  return (
    <>

      <main className={`relative isolate overflow-hidden px-6 ${showBackLink ? 'flex min-h-[100svh] flex-col border-b border-white/[0.08] py-8 sm:py-10 lg:px-[7vw] lg:py-7' : 'py-16 sm:py-20 lg:px-[108px] lg:py-24'}`}>
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 -z-10 h-96 w-96 rounded-full bg-[#D3E97A]/[0.06] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#D3E97A]/[0.08] blur-[120px]" />
        {showBackLink && (
          <div className="mx-auto mb-8 flex w-full max-w-[1440px] justify-start lg:mb-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D7DEE2] transition-colors hover:text-[#D3E97A] sm:text-sm sm:tracking-[0.18em]"
            >
              <FaArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to portfolio
            </Link>
          </div>
        )}
        <div className={`mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[6vw] ${showBackLink ? 'flex-1 content-center' : ''}`}>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={leftSectionVariants}
          className='flex flex-col justify-between lg:text-start sm:text-center'>
          <div>
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3E97A]">
                <span className="h-2 w-2 rounded-full bg-[#D3E97A] shadow-[0_0_12px_#D3E97A]" />
                Available for opportunities
              </p>
              <motion.h1
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="max-w-xl font-script text-5xl leading-[1.05] sm:text-6xl lg:text-[clamp(3.5rem,5vw,4.75rem)]"
              >Let&apos;s build<br /><span className="text-[#D3E97A]">something great.</span></motion.h1>


              <motion.p
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="mt-5 max-w-lg text-base leading-7 text-[#A1A1AA] sm:text-lg"
              >Have a project in mind or want to talk through an idea? Send me a message or email me at {" "}
                <Link href="mailto:zohaib24a@gmail.com?subject=Hello%20Zohaib&body=Hi%20Zohaib,%20I%20wanted%20to%20connect%20with%20you%20regarding...">
                  <span className="text-white underline decoration-[#D3E97A]/70 underline-offset-4 transition-colors hover:text-[#D3E97A]">zohaib24a@gmail.com</span>
                </Link>

                . You can also take a look at my <a download href="/Full_Stack_Dev_Applicant.pdf" className="text-white underline decoration-[#D3E97A]/70 underline-offset-4 transition-colors hover:text-[#D3E97A]">resume</a>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex gap-3 text-[#D3E97A]
            lg:justify-start lg:items-start
            sm:justify-center sm:items-center

            ">
              {/* Open the new tab, but don’t give it access to my page
              This visitor came from xyz.com */}
              <Link aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#D3E97A]/60 hover:bg-[#D3E97A]/10" href='https://github.com/zabi2404' target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5 cursor-pointer" />
              </Link >
              <Link aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#D3E97A]/60 hover:bg-[#D3E97A]/10" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zohaib-ali-239468392/">
                <FaLinkedinIn className="h-5 w-5 cursor-pointer" />
              </Link>
              


            </motion.div>

          </div>

        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-[#111111]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7 lg:p-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={rightPanelVariants}
        >

          <motion.form onSubmit={handleForm} variants={rightSectionVariants} initial="hidden" animate="show">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3E97A]">Send a message</p>
              <h2 className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">Tell me about your project</h2>
              <p className="mt-1 text-sm leading-5 text-white/45">Fill in the details below and I’ll get back to you.</p>
            </div>


            <motion.div className='mb-4' variants={formItemVariants}>
              <label htmlFor="contact-name" className="mb-1.5 block font-secondary text-sm text-[#C7C7C7]">Your name</label>
              <div className="rounded-lg border border-white/[0.08] bg-[#090909] px-4 py-2.5 transition focus-within:border-[#D3E97A]/60 focus-within:ring-2 focus-within:ring-[#D3E97A]/10">

                <input onChange={onChangeInputHandler} className="w-full bg-transparent text-white outline-none placeholder:text-white/25" type="text" name="from_name" id="contact-name" autoComplete="name" placeholder="Your name" value={inputData.yourName} required />
              </div>
            </motion.div>

            <motion.div className='mb-4' variants={formItemVariants}>
              <label htmlFor="contact-email" className="mb-1.5 block font-secondary text-sm text-[#C7C7C7]">Your email</label>
              <div className="rounded-lg border border-white/[0.08] bg-[#090909] px-4 py-2.5 transition focus-within:border-[#D3E97A]/60 focus-within:ring-2 focus-within:ring-[#D3E97A]/10">

                <input onChange={onChangeInputHandler} className="w-full bg-transparent text-white outline-none placeholder:text-white/25" type="email" name="from_email" value={inputData.yourEmail} id="contact-email" autoComplete="email" placeholder="you@example.com" required />
              </div>
            </motion.div>

            <motion.div className='mb-4' variants={formItemVariants}>
              <label htmlFor="contact-subject" className="mb-1.5 block font-secondary text-sm text-[#C7C7C7]">Subject</label>
              <div className="rounded-lg border border-white/[0.08] bg-[#090909] px-4 py-2.5 transition focus-within:border-[#D3E97A]/60 focus-within:ring-2 focus-within:ring-[#D3E97A]/10">

                <input onChange={onChangeInputHandler} className="w-full bg-transparent text-white outline-none placeholder:text-white/25" type="text" name="subject" value={inputData.subject} id="contact-subject" placeholder="What would you like to discuss?" required />
              </div>

            </motion.div>
            <motion.div className='mb-4' variants={formItemVariants}>
              <label htmlFor="contact-message" className="mb-1.5 block font-secondary text-sm text-[#C7C7C7]">Message</label>
              <div className="rounded-lg border border-white/[0.08] bg-[#090909] px-4 py-2.5 transition focus-within:border-[#D3E97A]/60 focus-within:ring-2 focus-within:ring-[#D3E97A]/10">

                <textarea onChange={onChangeInputHandler} className="w-full resize-y bg-transparent text-white outline-none placeholder:text-white/25" name="message" rows={3} value={inputData.message} id="contact-message" placeholder="A few details about your idea, goals, or timeline..." required></textarea>
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

              <ToastContainer />

            </motion.div>

          </motion.form>


        </motion.div>

        </div>
      </main>

    </>
  )
}

export default Connect;
