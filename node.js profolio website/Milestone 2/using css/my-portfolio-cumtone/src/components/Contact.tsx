import React from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import "../app/styles/contact.css"



const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2' >
            <div className='contact-space' data-aos="fade-up">
                <h2  className='contact-heading'>Get in touch</h2>
                <p className='contact-text '> Drop me a line , give a cell , or send a message by subbing </p>
                <div className='contact-flex'>
                <MdOutlineMailLock size={40} /> m.samiwaseem1234@gmail.com

                </div>
                <div className='contact-flex'>
                <LiaPhoneVolumeSolid size={40} /> (+92) 3477286878
                </div>
            </div>
            <div className='contact-space'>
                <div className='form'>
                    <label htmlFor="name">Name</label>
                    <input type="text"  id="name" className='input-field' />
                </div>
            
                <div className='form'>
                    <label htmlFor="Email">Email</label>
                    <input type="text"  id="Email" className='input-field' />
                </div>
                
                <div className='form'>
                    <label htmlFor="Message">Message</label>
                <textarea
                  className='textarea-field' rows={8} id='Message' >
                    </textarea>
                </div>
                <button className='button '>Send</button>
                </div>
            </div>
            </div>
  )
}

export default Contact