import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-[#8cc63f] text-center py-20 overflow-hidden">
  {/* Background Design */}
  <div className="absolute inset-0">
    <div className="absolute w-full h-full bg-[#8cc63f] z-0"></div>
    <div className="absolute bottom-0 w-full h-full">
      {/* Add wave-like design */}
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full opacity-60"
      >
        <path
          d="M0,320 C200,400 400,200 600,320 C800,440 1000,280 1200,320 L1200,400 L0,400 Z"
          fill="#6ba32b"
        ></path>
      </svg>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4">
    <h1 className="text-5xl md:text-6xl font-bold text-white">
      WE ARE <span className="text-gray-100">EXPERTS</span>
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-100 leading-relaxed">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    </p>
    <button className="mt-8 bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 px-8 py-3 rounded shadow-md font-semibold">
      READ MORE
    </button>
  </div>

  {/* Pagination Dots */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
    <span className="w-4 h-4 rounded-full bg-white"></span>
    <span className="w-4 h-4 rounded-full bg-gray-300"></span>
    <span className="w-4 h-4 rounded-full bg-gray-300"></span>
  </div>
</section>
  )
}

export default Hero