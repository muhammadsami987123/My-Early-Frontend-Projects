import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          OUR <span className="text-green-500">PORTFOLIO</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore our creative and professional work, showcasing excellence in
          design, branding, and development.
        </p>

        {/* Full Portfolio Image */}
        <div className="relative w-full h-[300px] mt-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/portfolio.jpg" 
            alt="A showcase of our professional portfolio work"
            layout="fill"
            objectFit="contain" // Ensures the full image is displayed
            priority
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
