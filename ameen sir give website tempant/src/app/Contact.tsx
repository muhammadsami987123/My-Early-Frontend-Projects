import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-12 text-center bg-white">
    <h2 className="text-4xl font-bold">
      OUR <span className="text-green-600">CONTACTS</span>
    </h2>
    <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">
      <div className="flex items-center gap-4">
        <FaPhone className="text-green-600 text-3xl" />
        <p>(304) 386-6719</p>
      </div>
      <div className="flex items-center gap-4">
        <FaPhone className="text-green-600 text-3xl" />
        <p>(317) 011-3001</p>
      </div>
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-green-600 text-3xl" />
        <p>info@website.com</p>
      </div>
    </div>
    {/* Map */}
    <div className="relative w-full h-96 mt-8">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.6232329546833!2d66.9587955!3d24.9108301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315238af71095%3A0x341884a79165a8bd!2sSwat%20Colony%20Mohajir%20Camp%20Saeedabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1734543926886!5m2!1sen!2s"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="Google Maps"
></iframe>
</div>
</section>
  )
}

export default Contact