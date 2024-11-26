import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="pt-1" id='footer-sec'>
        <div>
        <nav className="text-[13px] tracking-[0.5px]  px-[52px] py-2 flex text-white flex-col items-center ">
            <Link href="" className="text-[1.5rem] pb-4">
           <li className="list-none bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text">
                LOgo
            </li>
            </Link>
            <ul className="flex gap-6 text-gray-300">
            <Link href="">
                <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
                Home
                </li>
            </Link>
            <Link href="/services">
                <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
                Services
                </li>
            </Link>
            <Link href="/about">
                <li className= "hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">About me</li>
            </Link>
            <Link href="/contact">
                <li className= "hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Contact me</li>
            </Link>
            <Link href="">
                <li className="list-none hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Porfolio</li>
            </Link>
        </ul>
        </nav>
        <div className="text-[1.6rem] text-gray-300  mx-auto   w-[50%] ">
        <ul className="flex gap-4 my-3 mx-auto  w-[40%] justify-evenly">
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 rounded-3xl inline-block w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
            <Link href="">
              <span className="fab fa-linkedin"></span>
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
            <Link href="">
              <span className="fab fa-github"></span>
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
            <Link href="">
              <span className="fab fa-facebook"></span>
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
            <Link href="">
              <span className="fab fa-instagram"></span>
            </Link>
          </li>
        </ul>
        </div>
        <div className='text-gray-300 flex justify-center gap-6 border-b border-gray-300 w-[360px] mx-auto pb-5'>
            <div >
                <span className="fa-solid fa-envelope inline-block mt-1 text-[14px]"></span>
                <span className="ml-2 text-[14px]">alishahzain604@gmail.com</span>
            </div>
            <div>
                <span className="fa-solid fa-phone mr-2 inline-block mt-1 text-[14px]"></span>
                <span className="inline-block text-[14px] ">+92 3363005909</span>
            </div>
        </div>
        <div className='text-gray-300 w-[50%] text-[12px] mx-auto text-center '>
            <p className='mt-2'>Designed by @shahzain.ali Front-End-Developer</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
