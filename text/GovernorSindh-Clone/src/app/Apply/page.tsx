// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import Footer from '../../components/Footer'
// import React, { useState } from 'react';

// export default function apply(){
//     return(
//         <div>
//              <div  className="container text-center text-xl text-main xs:text-3xl">

//                 <h2 className='text-wrap'> Before continuing to the application please subscribe on these social media platforms.</h2>
//              </div>
//              <br /><br /><br />
//              {/* <Footer /> */}
//         </div>
        
//     );
// }

// pages/apply.tsx
"use client";

import { FC } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

const ApplyPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        
        <p className="text-blue-900  font-semibold text-2xl mb-6 xs:3xl">Before continuing to the application, please subscribe on these social media platforms.</p>
        
        <div className="flex justify-center mb-4">
          <Link href="https://facebook.com">
            <span className="text-blue-600 text-3xl mx-2">📘</span>
          </Link>
        </div>

        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 focus:outline-none">
          Continue
        </button>

        <p className="mt-4 text-gray-500 text-sm">
          Already applied?{' '}
          <Link href="/get-admit-card" className="text-blue-600 hover:underline">
            Get Admit Card
          </Link>
        </p>

     
        <div className="flex justify-center mt-6 space-x-4">
          <SocialLink name="Facebook" index={1} />
          <SocialLink name="Youtube" index={2} />
          <SocialLink name="Twitter" index={3} />
          <SocialLink name="Instagram" index={4} />
          <SocialLink name="Apply" index={5} />
        </div>
      </div>
             
      
    </div>
    
  );
};

const SocialLink: FC<{ name: string; index: number }> = ({ name, index }) => (
  <div className="text-blue-600 text-sm font-semibold flex items-center space-x-1">
    <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold">
      {index}
    </span>
    <span>{name}</span>
  </div>
);


export default ApplyPage;
