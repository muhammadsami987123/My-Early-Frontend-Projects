import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
 const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

  return (
    <div className="container pt-8 ">
        <div className=' flex justify-between items-center'>
            <div className='text-xl font-extrabold '>Muhammad Sami</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'><a href='#hero' >Home</a></li>
                    <li className='menuLink'><a href='#about'>About</a></li>
                    <li className='menuLink'><a href='#projects'>Projects</a></li>
                    <li className='menuLink'><a href='#skills'>Skills</a></li>
                    <li className='menulink'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={toggleMenu} >
              {isMenuOpen ?  <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
               }
            </div>

        </div>
        {
          isMenuOpen && (
            <ul className='flex flex-col gap-4 mt-4 md:hidden'>
                    <li className='menuLink'><a href='#Hero' onClick={toggleMenu}>Home</a></li>
                    <li className='menuLink'><a href='#About' onClick={toggleMenu}>About</a></li>
                    <li className='menuLink'><a href='#Projects' onClick={toggleMenu}>Projects</a></li>
                    <li className='menuLink'><a href='#Skills' onClick={toggleMenu}>Skills</a></li>
                    <li className='menulink'><a href='#Contact' onClick={toggleMenu} >Contact</a></li>
            </ul>
          )
        }

    </div>
  )
}

export default Navbar