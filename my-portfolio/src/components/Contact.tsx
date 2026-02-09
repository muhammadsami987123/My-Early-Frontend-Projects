import React from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10' >
            <div className='space-y-8' data-aos="fade-up">
                <h2  className='text-5xl '>Get in touch</h2>
                <p className='text-white 900 text-[18px] pt-2 '> Drop me a line , give a cell , or send a message by subbing </p>
                <div className='flex gap-3 items-center'>
                <MdOutlineMailLock size={40} /> zainbaba1@gmail.com

                </div>
                <div className='flex gap-3 items-center'>
                <LiaPhoneVolumeSolid size={40} /> (+92) 3191511504
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"  id="name" className='h-[40px] bg-transparent border-accent border ' />
                </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="Email">Email</label>
                    <input type="text"  id="Email" className='h-[40px] bg-transparent border-accent border ' />
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="Message">Message</label>
                <textarea
                  className='bg-transparent border-accent border' rows={8} id='Message' >
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6 '>Send</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact