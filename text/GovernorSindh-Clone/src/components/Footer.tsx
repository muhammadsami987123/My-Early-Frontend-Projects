import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        
        <section className="footer-upper bg-slate-300 py-5 text-black">
          <div className="container mx-auto flex flex-wrap gap-5 justify-between text-center md:text-left">
            {/* Footer columns will stack on smaller screens */}
            <div className="footer-links w-full md:w-1/4 mb-5 md:mb-0 lg:ml-6 md:ml-6">
              <h4 className="pb-2 mb-2 text-2xl font-semibold">Core Courses</h4>
              <ul className="space-y-2 cursor-pointer">
                <li>Programming Fundamentals</li>
                <li>Web2 Using NextJS</li>
                <li>Earn as You Learn</li>
              </ul>
            </div>
            <div className="footer-links w-full md:w-1/4 mb-5 md:mb-0">
              <h4 className="pb-2 mb-2 text-2xl font-semibold">Advanced Courses</h4>
              <ul className="space-y-2 cursor-pointer">
                <li>Web 3 and Metaverse</li>
                <li>Cloud-Native Computing</li>
                <li>Artificial Intelligence (AI) and Deep Learning</li>
                <li>Ambient Computing and IoT</li>
                <li>Genomics and Bioinformatics</li>
              </ul>
            </div>
            <div className="footer-links w-full md:w-1/4 mb-5 md:mb-0">
              <h4 className="pb-2 mb-2 text-2xl font-semibold">Social Links</h4>
              <ul className="space-y-2 cursor-pointer">
                {/* Social Media Icons */}
                <li className="flex justify-center md:justify-start space-x-3 cursor-pointer">
                  <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="transition duration-300 ease-in-out hover:scale-110 md:w-8 md:h-8" />
                  <Image src="/youtube.png" alt="Youtube" width={24} height={24} className="transition duration-300 ease-in-out hover:scale-110 md:w-10 md:h-10" />
                  <Image src="/instagram.png" alt="Instagram" width={24} height={24} className="transition duration-300 ease-in-out hover:scale-110 md:w-8 md:h-8" />
                  <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="transition duration-300 ease-in-out hover:scale-110 md:w-8 md:h-8" />
                  <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} className="transition duration-300 ease-in-out hover:scale-110 md:w-8 md:h-8" />
                </li> 
                {/* Email Line */}
                <li className="flex justify-center md:justify-start items-center space-x-2 mt-3">
                  <Image src="/mail.png" alt="Email" width={30} height={24} />
                  <span className="border-b-2 border-b-sky-700 text-blue-500">education@governorsindh.com</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}