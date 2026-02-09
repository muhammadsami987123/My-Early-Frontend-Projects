"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows={4}
            placeholder="Type your message here"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
        <p className="text-gray-700 mb-2">123 3D Store Ave, Suite 100</p>
        <p className="text-gray-700 mb-2">City, State, 12345</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
        <p className="text-gray-700 mb-2">Email: <a href="mailto:support@3dstore.com" className="text-blue-500 hover:underline">support@3dstore.com</a></p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold">What is your return policy?</h3>
          <p className="text-gray-700">You can return any item within 30 days of purchase for a full refund.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">How can I track my order?</h3>
          <p className="text-gray-700">You will receive a tracking number via email once your order has shipped.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Do you offer international shipping?</h3>
          <p className="text-gray-700">Yes, we ship to many countries worldwide. Please check our shipping policy for more details.</p>
        </div>
      </div>
    </div>
  );
}
