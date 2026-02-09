import Navbar from './Navbar'; 
import React from 'react'
import '../app/styles/hero.css'
const Hero = () => {
  return (
    <div 
      id="hero" 
      className="hero-container"
    >
      <Navbar />
      <div className='hero-container'>
        <div className='hidden lg:block'></div>

        <div className='hero-text'>
          <p data-aos="zoom-out-down">I&apos;m</p>
          <p data-aos="fade-up">Muhammad</p>
          <p data-aos="zoom-out-down">Sami</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
