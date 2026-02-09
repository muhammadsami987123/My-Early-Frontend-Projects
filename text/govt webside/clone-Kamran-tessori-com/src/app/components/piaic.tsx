import Image from "next/image"
import Kamran from "../images/governorsinsh.jpg"
import Piaicimage from "../images/piaic.jpg"
function Piaic(){
    return(
        <div className="w-full] flex flex-col justify-center items-center border-b-4 border-double border-gray-500">
        <div className="w-[80%] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row p-10 justify-center items-center gap-3">
            <div className=" bg-slate-900 rounded-lg overflow-hidden">
                <Image src={Kamran} alt="Kamran" className="sm:w-full md:w-full  md:h-[600px] lg:w-full h-[300px] xl:w-full  object-cover"></Image>
            </div>
            <div className=" bg-slate-900 rounded-lg overflow-hidden">
            <Image src={Piaicimage} alt="piaic"  className="lg:w-full h-[300px]   md:h-[600px] object-cover"></Image>
            </div>
        </div>
        <hr />
        </div>
    )
}
export default Piaic