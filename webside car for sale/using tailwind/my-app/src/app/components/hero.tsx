"use client";
import React from 'react'
// import AOS from 'aos';
// import "aos/dist/aos.css";

const Hero = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         once: true, 
    //     });
    // },[]);

  return (
        <section className='hero h-screen flex justify-center bg-no-repeat bg-j bg-cover bg-center ' style={{backgroundImage: "url(https://autobunny-docs.s3.ca-central-1.amazonaws.com/1233/web-content/site_slider_filename.jpg)"}}>
          <div className='pl-0 p-4  md:pl-16  text-white text-center '>
            <h1 className='text-6xl  font-bold drop-shadow-md ' >Welcome to SellMyRide</h1>
            <p className='text-2xl mt-4 '>The go-to platform for buying and selling used cars. We make it easy to find reliable vehicles at great prices or sell your car fast and hassle-free. With our secure and straightforward process, you can confidently explore a wide selection of cars to suit your needs. Drive your way with SellMyRide!</p>
              <button className='mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-900 text-white rounded-md font-bold'>Buy Now</button> 
          </div>
        </section>
  )
}

export default Hero