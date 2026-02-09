'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

// Sample project data - replace with your own projects
const projects = [
    {
        id: 1,
        title: 'Furniture E-Commerce Platform',
        description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
        tags: ['React', 'Node.js', 'next.js', 'sanity', 'Stripe','tailwind' , 'shipengin'],
        imageUrl: '/projext1.png',
        liveUrl: 'https://hackthone-two.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Marketplace-Hackathon-2025.git',
      },
      {
        id: 2,
        title: 'Blog Website',
        description: 'A modern blog platform with rich text editing, user authentication, and content management features.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'Markdown'],
        imageUrl: '/project3.png',
        liveUrl: 'https://blogwebsite-gray.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Blog-website',
      },
      {
        id: 6,
        title: 'ChatBot',
        description: 'A chatbot application that provides automated responses to user queries, with a customizable interface and conversation history.',
        tags: ['React', 'Node.js', "Next.js", 'Tailwind CSS', 'Chat Engine API'],
        imageUrl: '/project8.png',
        liveUrl: 'https://chat-bot-using-next-js.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/ChatBot-using-next.js',
      },
      {
        id: 3,
        title: 'Electronics E-Commerce Platform',
        description: 'A complete online marketplace for buying all types of electronic items, from smartphones to home appliances, with advanced search and filtering capabilities.',
        tags: ['React', 'Node.js', 'sanity', 'Stripe', 'Tailwind CSS', 'Search API'  ],
        imageUrl: '/project2.png',
        liveUrl: 'https://e-commerce--exclusive.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Electronic-E-Commerce.git',
      },
      {
        id: 4,
        title: 'Todo Application',
        description: 'A full-featured todo app with task management, due dates, priority levels, and filtering options.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'next.js'],
        imageUrl: '/project5.png',
        liveUrl: 'https://todo-app2-rho.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Todo-app.git',
      },
      {
        id:14,
        title: 'Personal Portfolio',
        description: 'A professional portfolio website showcasing projects, skills, and contact information.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
        imageUrl: '/project14.png',
        liveUrl: 'https://iqra-portfoilo.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/portfolio-for-iqra',
      },
      {
        id: 5,
        title: 'Resume Builder',
        description: 'A modern resume builder application with customizable templates, real-time preview, and PDF export functionality.',
        tags: ['Html', 'TypeScript', 'Tailwind CSS', 'PDF Generation'],
        imageUrl: '/project6.png',
        liveUrl: 'https://resme-builder-milestone-05.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Resme-Builder-Milestone-5.git',
      },
      {
        id:16,
        title: 'PaneClounds Website',
        description: 'A professional website for a cloud hosting business showcasing products, services, and contact information.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
        imageUrl: '/project15.png',
        liveUrl: 'https://paneclounds.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Pana-CLoud',
      },
     
      {
        id: 7,
        title: 'Baker Website',
        description: 'A professional website for a bakery business showcasing products, services, and contact information.',
        tags: [ 'CSS', 'Responsive Design', 'Image Gallery', 'Contact Form', 'Html' , 'TypeScript'],
        imageUrl: '/project7.png',
        liveUrl: 'https://bakerwebsite-rose.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Baker-Website.git',
      },
      {
        id: 8,
        title: 'Personal Library Manager',
        description: 'A web application for managing a personal library collection, with book search, sorting, and filtering features.',
        tags: ["Python", 'Streamlit','Google Books API'],     
        imageUrl: '/project9.png', 
        liveUrl: 'https://library--manager.streamlit.app/',
        githubUrl: '',
      },
      {
        id: 9,
        title: 'Password Security Analyzer',
        description: 'A tool for analyzing the security of passwords, with features for checking strength, complexity, and common vulnerabilities.',
        tags: ['Python', 'Tkinter' , 'steamlit'],
        imageUrl: '/project10.png',
        liveUrl: 'https://password--strength.streamlit.app/',
        githubUrl: '',
      },
      {
        id: 10,
        title: 'Pro Unit Converter',
        description: 'A comprehensive unit conversion tool with support for length, weight, volume, temperature, and other common units.',
        tags: ['Python', 'Tkinter', 'steamlit'],
        imageUrl: '/project11.png',
        liveUrl: 'https://unit--convertor.streamlit.app/',
        githubUrl: '',
      },
      {
        id: 11,
        title: 'Data Sweeper',
        description: 'A data cleaning and analysis tool for processing large datasets, with features for filtering, sorting, and exporting data.',
        tags: ['Python', 'Pandas', 'Numpy', 'Tkinter' , 'steamlit'],
        imageUrl: '/project12.png',
        liveUrl: 'https://data-sweeper-app2.streamlit.app/',
        githubUrl: '',
      },
      {
        id:12,
        title: 'BMI Calculator',
        description: 'A simple body mass index calculator that calculates BMI based on user input for weight and height.',
        tags: ['Python', 'Tkinter', 'steamlit'],
        imageUrl: '/project13.png',
        liveUrl: 'https://bmi-calculator-web.streamlit.app/',
        githubUrl: '',
      },
];

export default function AllProjects() {
  return (
    <section id="all-projects" className="bg-white dark:bg-slate-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading='lazy'
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/muhammadsami987123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FiGithub className="mr-2" /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 