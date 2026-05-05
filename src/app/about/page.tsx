'use client';
import React from 'react';
import AboutmeHeader from '@/Pages/about/AboutmeHeader';
import AboutMeSecondSection from '@/Pages/about/AboutMeSecondSection';
import AboutMeThirdSection from '@/Pages/about/AboutMeThirdSection';


const Page = () => {

  return (

    <>

      <div className='
    lg:px-[108px]
xsm:px-4 xsm:gap-4
   '>
        <AboutmeHeader />

        {/* image */}
        {/* <div className="bg-[#24002E] rounded-[16px] 
    lg:mb-10
    xsm:mb-4
    
        lg:max-h-[600px] lg:min-h-[300px]
        xsm:max-w-full xsm:max-h-[350px] 
        sm:max-h-[400px] 
    flex items-center justify-center
    ">
          <img className="rounded-[16px] xsm:max-h-[350px]  sm:max-h-[400px]  lg:max-h-[600px] overflow-hidden" src="Images/profilepic.jpeg" alt="" />
        </div> */}
        {/* study section */}
        <AboutMeSecondSection />
        {/* experince */}
        <AboutMeThirdSection />
      </div>

    </>

  );
};

export default Page;
