import ServiceCard from '@/components/ServiceCard';
import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          OUR <span className="text-green-600">SERVICES</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of services designed to help your business thrive. From
          creative solutions to strategic marketing, we have got you covered.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 md:px-0">
          <ServiceCard
            title="WEB DESIGN"
            description="Beautiful and responsive websites."
          />
          <ServiceCard
            title="GRAPHIC DESIGN"
            description="Creative and modern designs."
          />
          <ServiceCard
            title="BRANDING"
            description="Building strong brand identities."
          />
          <ServiceCard
            title="MARKETING"
            description="Effective strategies for growth."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
