import React from 'react'

const contact= () => {
  return (
    
    // <div className='backgound' style={{backgroundImage: "url(https://deinfa.com/wp-content/uploads/2024/06/4-Best-Luxury-Cars-in-Pakistan-for-Rent-Featured-Image.jpg)"}}>
      <div>
      <section className='contact border max-w-lg mx-auto my-9 p-8 m-50 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center'>
          Contact Us
        </h2>
        <form >
          <input type="text" placeholder='Full Name' className='w-full md-4 px-4 py-2 border border-#ffff rounded-md ' required />
          <input type="Email" placeholder='Email Address' className='w-full md-4 px-4 py-2 border border-#ffff rounded-md ' required />
          <input type="text" placeholder='Phone Number'  className='w-full md-4 px-4 py-2 border border-#ffff rounded-md 'required />
          <textarea placeholder='Your Feedback' className='w-full md-4 px-4 py-2 border border-#ffff rounded-md ' rows={5} required></textarea>
          <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900'>Send Message</button>
        </form>
      </section>
    </div>
    
  )
}

export default contact