import React from 'react'

const Project = () => {
  return (
    <section className="py-12 bg-green-600 text-center text-white">
    <h2 className="text-3xl font-bold">START YOUR NEW PROJECT</h2>
    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 px-4">
      <input
        type="text"
        placeholder="YOUR NAME"
        className="p-3 rounded-md text-gray-800 w-full md:w-1/4"
      />
      <input
        type="email"
        placeholder="YOUR EMAIL"
        className="p-3 rounded-md text-gray-800 w-full md:w-1/4"
      />
      <input
        type="text"
        placeholder="YOUR PHONE"
        className="p-3 rounded-md text-gray-800 w-full md:w-1/4"
      />
      <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md font-semibold">
        SEND REQUEST
      </button>
    </div>
  </section>

  )
}

export default Project