"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PromoBanner = function () {
  const [countdownTimes, setCountdownTimes] = useState({
    hours: 23,
    minutes: 5,
    seconds: 59,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdownTimes((prevTimes) => {
        const { hours, minutes, seconds } = prevTimes;

        if (seconds > 0) {
          return { ...prevTimes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTimes, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(intervalId);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="px-6 lg:px-32 py-10">
      <div className="bg-gray-900 text-white rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 mt-8 space-y-6 lg:space-y-0">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-green-400 text-sm font-semibold mb-2">Categories</h2>
          <h1 className="text-3xl font-bold mb-4">Enhance Your Music Experience</h1>

          {/* Countdown Timer */}
          <div className="flex space-x-4 mb-6">
            {["Hours", "Minutes", "Seconds"].map((unit, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center justify-center text-center text-black w-[70px] h-[70px] rounded-full"
              >
                <span className="text-2xl font-bold">
                  {unit === "Hours"
                    ? countdownTimes.hours
                    : unit === "Minutes"
                    ? countdownTimes.minutes
                    : countdownTimes.seconds}
                </span>
                <span className="text-sm">{unit}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md">
            Buy Now!
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <Image
            src="/banner.jpg"
            alt="JBL Speaker"
            layout="intrinsic"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
