import React from 'react';

const Skills = () => {
  const skillsData = [
    { percentage: 45, title: 'SEO & ADS', color: '#F59E0B' }, // Orange
    { percentage: 60, title: 'BRANDING', color: '#EF4444' }, // Red
    { percentage: 75, title: 'MARKETING', color: '#22C55E' }, // Green
    { percentage: 80, title: 'WEB DESIGN', color: '#1F2937' }, // Dark Gray
  ];

  return (
    <section className="py-12 text-center bg-white">
      {/* Section Title */}
      <h2 className="text-4xl font-bold">
        OUR <span className="text-green-600">SKILLS</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Skills Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-4 sm:px-8 md:px-12">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-105"
          >
            {/* Circular Progress */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="8"
                  stroke="#e5e7eb"
                  fill="transparent"
                />
                {/* Foreground Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="8"
                  stroke={skill.color}
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * skill.percentage) / 100}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                />
              </svg>
              {/* Percentage Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold" style={{ color: skill.color }}>
                  {skill.percentage}%
                </span>
              </div>
            </div>
            {/* Skill Title */}
            <h3 className="mt-4 text-sm sm:text-lg font-semibold">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
