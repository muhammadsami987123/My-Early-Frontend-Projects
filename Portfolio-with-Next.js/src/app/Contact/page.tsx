'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="bg-white dark:bg-slate-800 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <motion.div
            className="max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Email</h4>
                  <a href="mailto:m.samiwaseem1234@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base">
                    m.samiwaseem1234@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Phone</h4>
                  <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base">
                    +92 3102256203
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Karachi,Sindh,Pakistan
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://github.com/muhammadsami987123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://twitter.com/MSAMIWASEEM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 flex justify-center items-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="p-3 sm:p-4 text-sm sm:text-base bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitError && (
                <div className="p-3 sm:p-4 text-sm sm:text-base bg-red-100 text-red-800 rounded-md">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}