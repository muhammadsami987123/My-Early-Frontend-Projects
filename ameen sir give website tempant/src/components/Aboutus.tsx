import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          PEOPLE <span className="text-green-600">ABOUT US</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          What our clients say about our work and team.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {/* Avatar */}
                <div className="bg-gray-300 w-14 h-14 rounded-full flex-shrink-0"></div>
                {/* Client Info */}
                <div className="ml-4">
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-gray-500 text-sm">CEO, Example Company</p>
                </div>
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy tempor
                incididunt ut labore et dolore magna aliquyam erat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
