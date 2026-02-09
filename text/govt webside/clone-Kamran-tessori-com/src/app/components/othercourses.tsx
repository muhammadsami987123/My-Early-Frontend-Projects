import Image from "next/image"
import automation from "../images/automation.jpg"
import genomics from "../images/genomics.jpg"
function OtherCourses(){
    return(
        <div className="w-[100%] flex flex-col justify-center items-center ">
          <div className="w-[80%] flex  sm:flex-col md:flex-col lg:flex-row  xl:flex-row justify-center items-center gap-4 rounded-lg pt-7">
            
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={genomics} alt="genomics" className="rounded-t-lg "></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600">Genomics </h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
                <Image src={automation} alt="automation" className="rounded-t-lg"></Image>
                <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600"> Automation</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black">
                {/* <Image src={cloudComputing} alt="cloudComputing" className="rounded-t-lg "></Image> */}
                {/* <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-sm font-bold text-center p-5 text-gray-600">Cloud-Native Computing</h1> */}
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black">
                {/* <Image src={Ambient} alt="Ambient" className="rounded-t-lg"></Image> */}
                {/* <h1 className="sm:text-xl md:text-lg lg:text-sm xl:text-md font-bold text-center p-5 text-gray-600">Ambient Computing</h1> */}
            </div>
            
           
          </div>
        
        </div>
        


    )
}
export default OtherCourses