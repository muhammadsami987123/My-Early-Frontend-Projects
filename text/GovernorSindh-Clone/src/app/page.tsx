"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import AutoSlideshow from '../components/AutoSlideshow';



export default function HomePage() {



  return (
    <>
      
      <main>
      <section className="relative min-h-[140vh] sm:min-h-[160vh] md:min-h-[180vh] lg:min-h-screen text-left text-white pt-[70px] pb-20 sm:pb-32 sm:mb-20" id="hero">
  <Image
    src="https://www.governorsindh.com/bg_house.jpg"
    alt="Hero Background"
    layout="fill"
    objectFit="cover"
    className="opacity-25"
  />
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 text-[#06306b] p-5 mt-8 z-10">
    <div className="flex flex-col gap-7">
      <h1 className="font-bold text-5xl">Governor Sindh</h1>
      <h3 className="text-2xl">Kamran Khan Tessori</h3>
      <h3 className="text-sky-400 font-bold text-4xl max-w-md">
        Certified Cloud Applied Generative AI Engineer (GenEng)
      </h3>
      <h1 className="font-bold text-2xl">Earn up to $5,000 / month</h1>
      <h1 className="font-bold text-2xl">Now admissions are open in Hyderabad</h1>
      <div className="flex items-center gap-4 mt-5 z-10"> 
        <Link href="/"> 
          <button className="bg-[#06306b] text-white p-3 rounded-md hover:bg-[#045e78] cursor-pointer ">
            Apply Now
          </button>
        </Link>
        <div className="flex flex-col items-start">
          <h1 className="text-[#06306b] text-5xl">562,143</h1>
          <h3 className="text-[#06306b]">Accepted Applications</h3>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 z-10 pr-0">
      <Image
        src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png" 
        alt="Right Image"
        width={700} 
        height={800} 
        className="rounded-lg max-w-full h-auto lg:block md:block "
        style={{ maxWidth: '100%', height: 'auto', maxHeight: '70vh'}}
      />
    </div>
  </div>
</section>
    </main>
    <div className="container mt-24 mx-auto px-12 py-4">
    <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-blue-900">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
    <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other&nbsp;team&nbsp;members.</p>
    
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Skill Item */}
              <div >
                <Image
                  src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg" 
                  alt="1"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md w-full h-full"
                />
                
              </div>
              <div >
                <Image
                  src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg" 
                  alt="2"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md w-full h-full"
                />
                
              </div>


              <div>
                <Image
                  src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg" 
                  alt="3"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md w-full h-full"
                />
              </div><hr />
              
               <AutoSlideshow />
            </div>  
<hr />
            <h1 className="text-left mt-6 mb-7 xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-blue-900" >Core Courses Sequence</h1> 
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Skill Item */}
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Programming Fundamentals</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Web2 Using NextJS</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Earn as You Learn</span>
              </div>
            </div>

            <h1 className="text-left mt-6 mb-7 xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-blue-900" >Advanced Courses</h1> 
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-5">
              {/* Skill Item */}
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Artificial Intelligence (AI) and Deep Learning</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Web 3 and Metaverse</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Cloud-Native Computing</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Ambient Computing and IoT</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Genomics and Bioinformatics</span>
              </div>
              <div className="text-center  transition duration-300 ease-in-out hover:scale-110 cursor-pointer ">
                <Image
                  src="https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg" 
                  alt="CSS"
                  width={500} 
                  height={100}
                  className="mx-auto rounded-md "
                />
                <span className="bg-white border-2 rounded-md p-6 block font-bold text-slate-800 lg:text-3xl">Network Programmability and Automation</span>
              </div>
            </div>


            </div>


    </>
  );
}