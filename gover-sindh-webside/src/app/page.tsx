
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  return (
         <main>
          <section className="relative min-h-[140vh] sm:min-h-[160vh] md:min-h-[180vh] lg:min-h-screen text-left text-white pt-[70px] pb-20 sm:pb-32 sm:mb-20" id = "hero">
       
        {/* <Image
        src="https://www.governorsindh.com/bg_house.jpg"
        alt = "hero Backgound"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
       /> */}
       <div>
        {/* <Navbar/> */}
        <div className="flex flex-col justify-center h-[110vh] p-4  ">
          <h1 className="text-[#044E83]  px-4  font-extrabold  tracking-wider  sm:text-6xl"> Governor Sindh</h1>
          <h1 className="text-[#3165CF] px-4 p-1  tracking-wider font-serif  sm:text-4xl">Kamran Khan Tessori </h1>
        <h1 className="text-[#2EB6E8] mt-5  px-4 font-extrabold  tracking-wider sm:text-4xl sm:leading-[3rem]  " > Certified Cloud</h1>
        <h1 className="text-[#2EB6E8]  px-4  font-extrabold  tracking-wider sm:text-4xl sm:leading-[3rem]  " >Applied Generative AI</h1>
        <h1 className="text-[#2EB6E8]  px-4  font-extrabold  tracking-wider sm:text-4xl sm:leading-[3rem]  " >Engineer (GenEng)</h1>
        <h1 className="text-[#044E83]  px-4  p-4 font-extrabold tracking-wider  sm:text-2xl">Earn up to $5000/ month</h1>
        <p className="text-[#044E83]  px-4  p-4 font-extrabold tracking-wider sm:text-2xl ">Now admissions are open in Hyderabad</p>
         {/*
          src="/img.png"
          className = "md:ml-40 h-auto min-w-[900px] lg:w-[600px] style=color:transparent"
          ></img>      */}
          <button className="bg-[#044E83] px-4 py-1  font-semibold text-white w-full tracking-widest sm:py-4 sm:text-base md:w-52 - ">
                 APPLY NOW 
          </button>
          <h1 className=" font-extrabold text-[#044E83] text-center tracking-wider  sm:text-3xl">562,143</h1>
          <h1 className="  text-[#044E83] text-center tracking-widest sm:text-1xl h">Accepted Applications</h1>
       </div>
    </div>
    <div className="flex-shrink-0 z-10 pr-0">
      {/* <Image
        src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png" 
        alt="Right Image"
        width={700} 
        height={800} 
        className="rounded-lg max-w-full h-auto lg:block md:block "
        style={{ maxWidth: '100%', height: 'auto', maxHeight: '70vh'}}
      /> */}
      </div>
       </section>
    </main>
    
  );
}
