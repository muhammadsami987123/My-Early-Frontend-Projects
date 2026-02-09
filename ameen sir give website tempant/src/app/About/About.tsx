import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            ABOUT <span className="text-green-600">US</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded shadow-lg transition-transform transform hover:scale-105">
            READ MORE
          </button>
        </div>

        {/* Right Side: Graphics */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/about2.png"
              alt="About Us Graphic"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
