import Image from "next/image"
import kamran from "../images/kamran.png"
function Hero(){
    return(
         <div  className="w-[100%] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center sm:pt-32 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20 border-b-4 border-double border-gray-500 "
         >
            {/* text */}
            <div className=" flex flex-col justify-start items-start sm:ml-3  lg:ml-7 sm:pt-5 md:pl-10 md:pt-8 lg:pt-0 lg:pl-10 xl:pl-10 2xl:pl-10"> 
                <h1 className="sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl text-[#044e83] font-extrabold  ">Governor Sindh</h1>
                <h2 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl text-[#044e83] mb-4">Kamran Khan Tessori</h2>
                <h2 className="sm:text-xl md:text-xl lg:text-3xl xl:text-2xl text-[#56b9f3] font-extrabold ">Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
                <h3 className="text-2xl text-[#044e83] font-bold lg:pt-9 xl:pt-9 2xl:pt-9">Earn up to $5,000 / month</h3>
                <h3 className="text-2xl text-[#044e83] font-bold  ">Now admissions are open in Hyderabad</h3>
                <button className="w-[150px] text-white p-3  text-xl rounded-lg sm:mt-5 md:mt-5 lg:mt-10 bg-[#044e83] font-bold transition duration-200 ease-out hover:scale-105 hover:ease-in ">Apply Now</button>
            </div>
            {/* image */}
            <div className=" sm:pt-5 md:pt-5 lg:pt-4 lg:pl-60 ">
            <Image width={200} height={200} src={kamran} alt="kamrantessori" className="w-[800px] h-[500px]"></Image>
            </div>
            </div>
    )
}
export default Hero
