import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="text-[13px] tracking-[0.5px]  px-8 py-2 flex text-white justify-between items-center">
        <Link href="" className="text-[1.5rem]">
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
        <button className="inline-block text-[0.8rem] w-[5rem] h-[1.7rem] bg-[#E46400] rounded-md hover:bg-[#c9492c]">
          Hire Me
        </button>
      </nav>
    </div>
  );
};

export default Header;
