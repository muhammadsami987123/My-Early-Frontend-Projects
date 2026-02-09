import React from 'react';
import Link from 'next/link';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Muhammad Sami Asghar Mughal</h1>
            <p className="text-xl opacity-90">Full Stack Web Developer | AI-Engineer Developer | Cloud-Native Developer</p>
          </div>

          <div className="p-8">
            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+92 347 7286878 | +92 310 2256203</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link href="mailto:m.samiwaseem1234@gmail.com" className="text-gray-700 hover:text-indigo-800">
                    m.samiwaseem1234@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Karachi, Pakistan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <Link href="https://linkedin.com/in/muhammad-sami--" target="_blank" className="text-gray-700 hover:text-indigo-800">
                    linkedin.com/in/muhammad-sami--
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <Link href="https://github.com/muhammadsami987123" target="_blank" className="text-gray-700 hover:text-indigo-800">
                    github.com/muhammadsami987123
                  </Link>
                </div>
              </div>
            </section>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Detail-oriented and passionate Full Stack Web Developer with a deep love for building high-performing, scalable web solutions - especially e-commerce and modern product websites. Known for obsessively testing and refining each feature, including AI-assisted quality checks, to ensure perfection. Currently focused on building AI agents and cloud-native apps, with long-term goals of working with international clients and launching a top-tier software house.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Education</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600">Intermediate in Science</p>
                    <p className="text-gray-600">SM Science College, Karachi Board (2024)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600">Matriculation in Science</p>
                    <p className="text-gray-600">Karachi Board (2022)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600">IT Certifications</p>
                    <p className="text-gray-600">GIAIC & PIAIC (Cloud AI, Agentic AI, Web3) (2024-2026)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects & Hackathons */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Projects & Hackathons</h2>
              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Marketplace Builder - Hackathon 2025</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Developed a live e-commerce platform using Next.js, Tailwind, and Stripe.</li>
                    <li>Integrated CMS (Sanity) and shipping service (ShipEngine).</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Resume Builder - Hackathon 2024</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Built an AI-powered resume builder with export and live preview features.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Perfect UI Design Template - 2024</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Created a modern, responsive template using Figma and React.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Furniture E-Commerce Platform</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Tech: React, Next.js, Stripe, Tailwind, ShipEngine</li>
                    <li>A complete product website with payment and shipping integration.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">Blog Website</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Tech: Next.js, TypeScript, Tailwind, Sanity</li>
                    <li>A full-featured blog platform with CMS and Markdown support.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills & Technologies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">Frontend</h3>
                  <p className="text-gray-700">React, Next.js, Tailwind CSS, ShadCN</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">Backend</h3>
                  <p className="text-gray-700">Python, Node.js</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">Database & CMS</h3>
                  <p className="text-gray-700">Sanity, Firebase</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">UI/UX</h3>
                  <p className="text-gray-700">Figma, Responsive Design</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">APIs</h3>
                  <p className="text-gray-700">REST APIs, Axios, Fetch</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">Tools</h3>
                  <p className="text-gray-700">Git, GitHub, Vercel, Postman</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">Integrations</h3>
                  <p className="text-gray-700">Stripe, ShipEngine</p>
                </div>
              </div>
            </section>

            {/* Internship Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Internship Experience</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Frontend Development Intern - CodeAlpha</h3>
                <p className="text-gray-600 mb-4">April 2025 - May 2025</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Selected for a 1-month internship focused on frontend development.</li>
                  <li>Learned industry best practices while building UI components and applying hands-on knowledge in real projects.</li>
                  <li>Gained experience in teamwork, responsibility, and real-time development.</li>
                </ul>
              </div>
            </section>

            {/* Freelance Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Freelance Projects</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Hackathon E-Commerce Website</h3>
                <Link href="https://hackthone-two.vercel.app" target="_blank" className="text-indigo-600 hover:text-indigo-800 block mb-4">
                  hackthone-two.vercel.app
                </Link>
                <p className="text-gray-700">
                  Developed a fully functional e-commerce website using Next.js and Tailwind CSS as an unpaid personal project. Designed for scalability and performance with modern UI practices.
                </p>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-700">Python & Next.js 15 Assessment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-700">Full Stack Web Developer | AI-Engineer Developer | Cloud-Native Developer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-700">Part of ongoing certification track (2024-2026) in AI and Full Stack Web Development.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">Languages</h2>
              <p className="text-gray-700">Urdu, English</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 