import Image from "next/image";
import Box1 from "../images/box1.jpg";
import Box2 from "../images/box2.jpg";
import Box3 from "../images/box3.jpg";

function Box() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-wrap gap-5 justify-center items-center pt-5">
        {/* Box 1 */}
        <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[25%] xl:w-[25%] h-auto  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in  ">
          <Image
            src={Box1}
            alt="Box1"
            className="rounded-lg object-cover w-full h-full shadow-2xl shadow-black"
          />
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[75%] md:w-[33%] lg:w-[28%] xl:w-[28%] h-auto  cursor-pointer  transition duration-200 ease-out hover:scale-105 hover:ease-in ">
          <Image
            src={Box2}
            alt="Box2"
            className="rounded-lg object-cover w-[96%] h-full shadow-2xl shadow-black"
          />
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[25%] xl:w-[25%] h-auto  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
          <Image
            src={Box3}
            alt="Box3"
            className="rounded-lg object-cover w-full h-full shadow-2xl shadow-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
