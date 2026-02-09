import React from 'react'
import { FaClock, FaComments, FaLightbulb, FaThumbsUp, FaUsers } from 'react-icons/fa'

const Advantages = () => {
  return (
    <section className="py-12 bg-white text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold uppercase">
        OUR <span className="text-green-600">ADVANTAGES</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    
      {/* Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 px-4 md:px-20">
        {/* Innovation */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
            <FaLightbulb className="text-6xl text-black" />
            <span className="absolute bottom-0 w-6 h-6  rounded-md"></span>
          </div>
          <h3 className="mt-4 font-bold text-lg uppercase">INNOVATION</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
    
        {/* Quality */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
            <FaThumbsUp className="text-6xl text-black" />
            <span className="absolute bottom-0 w-6 h-6  rounded-md"></span>
          </div>
          <h3 className="mt-4 font-bold text-lg uppercase">QUALITY</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
    
        {/* Experience */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
            <FaClock className="text-6xl text-black" />
            <span className="absolute bottom-0 w-6 h-6  rounded-md"></span>
          </div>
          <h3 className="mt-4 font-bold text-lg uppercase">EXPERIENCE</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
    
        {/* Happy Clients */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
            <FaUsers className="text-6xl text-black" />
            <span className="absolute bottom-0 w-6 h-6  rounded-md"></span>
          </div>
          <h3 className="mt-4 font-bold text-lg uppercase">HAPPY CLIENTS</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
    
        {/* Support */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
            <FaComments className="text-6xl text-black" />
            <span className="absolute bottom-0 w-6 h-6  rounded-md"></span>
          </div>
          <h3 className="mt-4 font-bold text-lg uppercase">SUPPORT</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Advantages