/* eslint-disable @typescript-eslint/no-unused-vars */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faYoutube, faLinkedin, faTiktok , faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Social icons
import Link from 'next/link';

function Apply(){
    return(
        <div className='w-full flex justify-center items-center h-[500px] sm:mt-20 md:mt-14 lg:mt-14 xl:mt-14'>
            <div className='flex flex-col justify-start items-center bg-white sm:w-[80%] md:w-[70%] lg:w-[35%] xl:w-35% 2xl:w-[35%] sm:h-[80%] md:h-[50%] lg:h-[70%] shadow-2xl shadow-black'>
                <h1 className='text-center text-2xl  p-5 text-[#044e83]'>Before continuing to the application please subscribe on these social media platforms.</h1>
                <ul className="list-none flex">
     
     <li>
       <Link href="https://youtube.com/@muzaffaritacademy?si=ViSjim7Zs95fDwXQ"  target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in " />
       </Link>
     </li>

     <li>
       <Link href="https://www.linkedin.com/in/muzaffar-ali-0b3939315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in " />
       </Link>
     </li>

     <li>
       <Link href="https://www.tiktok.com/@_muzaffar_ali_?_t=8qCq6QIr05a&_r=1 "  target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faTiktok} className="text-black text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in " />
       </Link>
     </li>
     <li>
       <Link href="https://web.facebook.com/profile.php?id=100093557110026"  target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in " />
       </Link>
     </li>
     <li>
       <Link href="https://chat.whatsapp.com/EJ4MB6rr9Jm6Nlj4YYMrH1"  target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in " />
       </Link>
      </li>
   </ul>
   <button className="w-[200px] text-white p-3  text-2xl rounded-md sm:mt-5 md:mt-5 lg:mt-10 bg-[#044e83] font-bold transition duration-200 ease-out hover:scale-105 hover:ease-in ">CONTINUE</button>

            </div>
        </div>
    )
}
export default Apply