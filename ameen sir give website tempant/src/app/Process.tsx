import React from 'react';
import { FaPhone, FaComments, FaClipboardList, FaCogs, FaWrench, FaCheckCircle } from 'react-icons/fa';

const Process = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          OUR <span className="text-green-600">PROCESS</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-6 hover:shadow-2xl ">
          {[
            { icon: <FaPhone className="rotate-90" />, title: 'REQUEST CALL' },
            { icon: <FaComments />, title: 'CONSULTATION' },
            { icon: <FaClipboardList />, title: 'PLANNING' },
            { icon: <FaCogs />, title: 'WORK PROCESS' },
            { icon: <FaWrench />, title: 'CORRECTING' },
            { icon: <FaCheckCircle />, title: 'DELIVER' },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-green-600 text-5xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
