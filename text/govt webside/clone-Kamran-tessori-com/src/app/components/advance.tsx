import Image from "next/image"
import AI from "../images/AI.jpg"
import metaverse from "../images/metaverse.jpg"
import cloudComputing from "../images/cloudComputing.jpg"
import Ambient from "../images/Ambient.jpg"
function AdvanceCourses(){
    return(
        <div className="w-[100%] flex flex-col justify-center items-center">
            <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold p-7 text-[#044e83] ">Advanced Courses</h1>
          <div className="w-[80%] flex  sm:flex-col md:flex-col lg:flex-row  xl:flex-row justify-center items-center gap-4 rounded-lg">
            
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black cursor-pointer z-10  transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={AI} alt="AI" className="rounded-t-lg"></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600">Artificial Intelligence</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={metaverse} alt="metaverse" className="rounded-t-lg"></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600">Web 3 and Metaverse </h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={cloudComputing} alt="cloudComputing" className="rounded-t-lg "></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-sm font-bold text-center p-5 text-gray-600">Cloud-Native Computing</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={Ambient} alt="Ambient" className="rounded-t-lg"></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600">Ambient Computing</h1>
            </div>
            
           
          </div>
        
        </div>
        


    )
}
export default AdvanceCourses