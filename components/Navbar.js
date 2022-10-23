import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCloseCircle, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import {BsFillBagCheckFill,BsBagXFill} from "react-icons/bs"
import { useRef } from 'react';

const Navbar = () => {

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }

  const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md'>
      <div className="logo mx-5">
        <Link href={"/"}>
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
      <div onClick={toggleCart} className="cart absolute right-0 mx-5">
        <button><AiOutlineShoppingCart className="text-xl md:text-2xl" /></button>
      </div>

      {/* ===============Sidebar Start Here================== */}
      <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center' >Shopping Cart </h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li className='py-5'>
            <div className="item flex">
              <div className='w-2/3 font-semibold' >Tshirt - Wear the Code</div>
              <div className='w-1/3 font-semibold flex items-center justify-center mx-2 text-lg'><AiFillMinusCircle className="cursor-pointer text-pink-500" /><span className='mx-2'>2</span><AiFillPlusCircle className="cursor-pointer text-pink-500"/></div>
            </div>
          </li>
        </ol>
        <div className='flex flex-col'>
          <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-4  focus:outline-none hover:bg-pink-600 rounded text-md"><BsFillBagCheckFill className="m-1"/>CheckOut</button>
          <button class="flex mx-auto mt-2 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-md"><BsBagXFill className="m-1"/>Clear Cart</button>
        </div>
      </div>
      {/* ===============Sidebar Ends Here================== */}

    </div>
  )
}

export default Navbar