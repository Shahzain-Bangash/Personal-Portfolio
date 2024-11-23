"use client"
// import Link from "next/link";
import React from "react";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

// import Services from "./(pages)/services/page";



export default function Home() {
  return (
    <div className="h-[100vh]">
      <Header></Header>
      <main className=" w-[93.5vw] h-[78vh] mx-auto">
        <div className="pt-8 leading-8">
          <h3 className="text-[1.4rem] text-gray-400 tracking-[0.8px] ">Hi,I am</h3>
          <h2 className="text-[1.8rem] text-gray-300 tracking-[1.5px]">Shahzain Ali</h2>
        </div>
        <div className="text-[2.4rem] font-bold">
  <div className="text-[2.4rem] font-bold">
    <Typewriter
      options={{
        strings: [
          '<span class="bg-gradient-to-r from-[#984300] to-[#FD6F00] bg-clip-text text-transparent">Front-End Developer</span>',
          '<span class="bg-gradient-to-r from-[#984300] to-[#CA5900] bg-clip-text text-transparent">UI/UX Designer</span>',
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        
      }}
    />
  </div>
</div>
        <div className="text-[1.6rem] text-gray-300 mt-4">
          </div>
          <ul className="flex gap-4 my-3">
            <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 rounded-3xl inline-block w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
               <Link href=""><span className="fab fa-linkedin"></span></Link>
            </li>
            <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
               <Link href=""><span className="fab fa-github"></span></Link>
            </li>
            <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
               <Link href=""><span className="fab fa-facebook"></span></Link>
            </li>
            <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:text-gray-50 inline-block rounded-2xl w-6 h-6 leading-6 text-center text-xs text-gray-300 ">
               <Link href=""><span className="fab fa-instagram"></span></Link>
            </li>
          </ul>
        <div className="flex my-6 gap-3">
        <button className="inline-block text-white text-[0.8rem] w-[5rem] h-[1.7rem] bg-[#E46400] rounded-md hover:bg-[#c9492c]">
          Hire Me
        </button>
        
        <button className="inline-block border border-gray-300 hover:bg-[#363637] hover:text-gray-50 text-[0.8rem] text-gray-300 w-[6.5rem] h-[1.7rem] rounded-md">
          Download CV
        </button>
        </div>
        <section className="flex gap-3 justify-center shadow-secondary rounded-md h-24 w-96 p-3">
          <div className="
          pr-4 leading-[2rem] relative before:absolute before:content-[''] before:border-l before:border-gray-300 before:right-0 before:h-14" >
             <p className="text-[#E46400]">2+</p>
             <h2  className="text-gray-300">Experience</h2>
          </div>
          <div className="pr-4 leading-[2rem] relative before:absolute before:content-[''] before:border-l before:border-gray-300 before:right-0 before:h-14">
             <p className="text-[#E46400]">20+</p>
             <h2 className="text-gray-300">Project Done</h2>
          </div>
          <div className="pr-4 leading-[2rem]">
             <p className="text-[#E46400]">30+</p>
             <h2 className="text-gray-300">Happy Clients</h2>
          </div>
        </section>
       
      </main>
    </div>
  );
}
