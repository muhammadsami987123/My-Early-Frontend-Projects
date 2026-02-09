import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="header">
    <h1 className='logo'>SellMyRide</h1>
    {/* <img className='logoo' src="/logo.png" alt="" /> */}
    <nav>
        <Link href={"/"}>Home</Link>
        <Link href="/about">About</Link>
        <Link href={"/cars"}>Cars</Link>
        <Link href={"/contact"}>Contact</Link>
        <FaCartShopping style={{color:"white", fontSize:"20px"}} />

    </nav>
</header>
  )
}

export default Navbar