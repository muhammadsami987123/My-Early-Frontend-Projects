import React from "react";
import Image from "next/image";

const featuredItems = [
  {
    name: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/featured1.jpg", // Path adjusted for public folder
    link: "#",
    isWide: true, // Makes it span two columns
  },
  {
    name: "Women's Collections",
    description: "Featured women collections that give you another vibe.",
    image: "/featured2.jpg", // Path adjusted for public folder
    link: "#",
  },
  {
    name: "Speakers",
    description: "Amazon wireless speakers.",
    image: "/featured3.jpg", // Path adjusted for public folder
    link: "#",
  },
  {
    name: "Perfume",
    description: "GUCCI INTENSE OUD EDP.",
    image: "/featured4.jpg", // Path adjusted for public folder
    link: "#",
  },
];

const FeaturedSection = () => {
  return (
    <div className="px-6 lg:px-32 py-10 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-red-500 font-semibold text-lg">Featured</h3>
        <h1 className="text-3xl font-bold text-gray-800">New Arrival</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`relative overflow-hidden rounded-lg transition-transform transform hover:scale-105 ${
              item.isWide ? "sm:col-span-2 lg:col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.name}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h2 className="text-white text-lg font-bold">{item.name}</h2>
              <p className="text-gray-200 text-sm mb-2">{item.description}</p>
              <button className="text-md text-white underline underline-offset-4 hover:font-bold">
                Shop Now
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
