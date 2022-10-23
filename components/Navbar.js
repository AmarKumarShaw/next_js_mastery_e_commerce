import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {AiFillCloseCircle, AiOutlineShoppingCart} from "react-icons/ai"
import { useRef } from 'react';

const Navbar = () => {

  const toggleCart = () => {

    
  }

  const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md'>
    <div className="logo mx-5">
      <Link  href={"/"}>
        <a href="">
          <Image src="/images/thai.png" height={40} width={40} alt="Logo" />
        </a>
      </Link>
    </div>
    <div className="nav">
    <ul className='flex items-center space-x-6 font-bold md:text-md '>
      <Link href={"/tshirt"}><a><li>Tshirts</li></a></Link>
      <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
      <Link href={"/stickers"}><a><li>Stickers</li></a></Link>
      <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
    </ul>
    </div>
      <div className="cart absolute right-0 mx-5">
        <button><AiOutlineShoppingCart className="text-xl md:text-2xl" /></button>
      </div>

      {/* ===============Sidebar Start Here================== */}
          <div ref={ref} className="sideCart sidebar absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full">
            <h2 className='font-bold text-xl' >Shopping Cart </h2>
            <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
          <ol>
            <li><span>Tshirt - Wear the Code</span></li>
          </ol>

          </div>
      {/* ===============Sidebar Ends Here================== */}

    </div>
  )
}

export default Navbar