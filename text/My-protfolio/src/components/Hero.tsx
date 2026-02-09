import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div 
    id="hero" className="min-h-screen  bg-no-repeat bg-[url(/backk.png)]  bg-cover"
    style={{backgroundSize :"35%" , backgroundPosition:"left 100px , top"}}
    >
        <Navbar/>
        <div className='container grid p-20 lg:grid-cols-2 h-[calc(100vh-60px)]   '> 
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[100px] font-bold leading-tight  ' >
            <p data-aos="zoom-out-down">I'm</p>
            <p data-aos="fade-up">Muhammad</p>
            <p data-aos="zoom-out-down">Sami</p>
          </div>
        </div>
    </div>
  )
}

export default Hero