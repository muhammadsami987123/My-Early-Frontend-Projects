'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  };
  
  // const letter = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0
  //   }
  // };

  // New animation for the tagline
  const taglineAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };
  
  // Social media links with corrected URLs
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/muhammadsami987123", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/muhammad-sami-3aa6102b8/", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com/MSAMIWASEEM1", label: "Twitter" },
    { icon: <FiMail size={20} />, url: "#contact", label: "Contact" }
  ];

  return (
    <section className="relative min-h-screen py-15 flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 z-0"></div>
      
      {/* Grid pattern overlay with parallax effect */}
      {/* <div 
        className="absolute inset-0 bg-[url('/')] bg-center bg-repeat bg-fixed [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] opacity-10 z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div> */}
      
      {/* Decorative particles/blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40 animate-blob z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg shadow-blue-500/20">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Full Stack Developer
                </span> */}
              </motion.div>
              
              <motion.h1 
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="block">Hi, I am <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"
                >
                  Muhammad Sami
                </motion.span></span>
              </motion.h1>
              
              <motion.div
                variants={taglineAnimation}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg relative z-10 pb-1"
                >
                  Web Developer | AI & Python Enthusiast | Next.js, React, TypeScript, Tailwind | Building Scalable & Intelligent Solutions
                </motion.p>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                ></motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="#projects">
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 focus:ring-4 focus:ring-blue-500/50 focus:outline-none transition-all group flex items-center justify-center">
                  View My Work
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <button className="px-8 py-3.5 bg-white dark:bg-slate-800 text-gray-800 dark:text-white font-medium rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-slate-700 focus:outline-none transition-all flex items-center justify-center">
                  <FiFileText className="mr-2" />
                  Download CV
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8"
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Connect with me</p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('http') ? "_blank" : undefined}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-2.5 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg shadow hover:shadow-md border border-gray-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500 transition-all"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image - Right column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                duration: 0.8
              }}
            >
              {/* Animated border blob */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                animate={{ 
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  background: "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                  transform: "scale(1.05)",
                  filter: "blur(10px)",
                  opacity: 0.7,
                  zIndex: -1
                }}
              />
              
              {/* Profile image */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-800">
                <Image 
                  src="/profile.png" 
                  alt="Muhammad Sami" 
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent mix-blend-overlay"></div>
                
                {/* Stats badges */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium shadow-md flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                  Full Stack Developer
                </div>
                
                {/* <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg text-xs font-medium shadow-md">
                  3+ Years Experience
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Link href="#about">
          <motion.button 
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-white shadow-md hover:shadow-lg border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
            whileHover={{ y: 5 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown size={20} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}