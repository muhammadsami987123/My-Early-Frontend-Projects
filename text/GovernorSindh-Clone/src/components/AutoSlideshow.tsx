// AutoSlideshow.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow7.9e3fcc75.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow8.4b79537a.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow2.ce4d5430.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow4.d9ba1e2d.jpg",
];

const AutoSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={75}
            priority={index === currentIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default AutoSlideshow;