"use client";
import React from "react";
import Image from "next/image";
const AboutPage = function () {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to [Your Company Name]! We are dedicated to providing the best
          services and products to our valued customers. Here is everything you
          need to know about who we are and what we do.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white shadow-lg rounded-lg py-8 px-6 md:px-12 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to deliver exceptional solutions that make a
          difference. We aim to bring innovation, integrity, and quality to
          every aspect of our business, ensuring customer satisfaction at every
          step.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <Image
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-40 h-40 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              John Doe
            </h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-40 h-40 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Jane Smith
            </h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <Image
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-40 h-40 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Alex Johnson
            </h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want to Learn More?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether youwere a customer, partner, or someone curious about our
          story, we were always happy to connect.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
