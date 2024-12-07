import Link from "next/link";
import React from "react";
import SideNavbar from "../components/SideNavbar";

const Header = () => {
  return (
    <header className="">
      <div className="bg-blue-800">
      
      </div>
      {/* Navigation bar for larger screens  sm:hidden*/}
      <nav className="text-[13px] tracking-[0.5px]   py-2 flex  text-white justify-between items-center">
      <SideNavbar/>
        <Link href="#home-sec" className="text-[1.5rem]">
          <li className="list-none bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text">
            LOgo
          </li>
        </Link>
        <ul className="flex gap-6 text-gray-300 customsm:hidden smm:hidden">
          <Link href="#home-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
              Home
            </li>
          </Link>
          <Link href="#service-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
              Services
            </li>
          </Link>
          <Link href="#about-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">About me</li>
          </Link>
          <Link href="#contact-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Contact me</li>
          </Link>
          <Link href="#">
            <li className="list-none hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Porfolio</li>
          </Link>
        </ul>
        <button className="customsm:block inline-block text-[0.8rem] w-[5rem] h-[1.7rem] bg-[#E46400] rounded-md hover:bg-[#c9492c]">
          Hire Me
        </button>
      </nav>

      {/* Burger Menu for small screens */}
    </header>
  );
};

export default Header;
