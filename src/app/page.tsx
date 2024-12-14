"use client";
import React from "react";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";;
import { useEffect } from "react";




export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      // Handle resize logic here
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);
  
  return (
   
    <div className="h-[100vh] w-[100%] landscape:min-h-screen landscape:bg-gradient-to-br landscape:to-[rgb(17, 17, 17)] landscape:from-[rgb(255, 255, 255)] landscape:w-screen landscape:h-auto " id="home-sec box-border">
      <div className=" w-[88%]  box-border mx-auto  custom1:w-[95%] ">
      <Header></Header>

      {/* #################### Short Personal Info ################# */}

      <div className="customsm:grid customsm:place-items-center  ">
      <main className="md:w-[100%] h-[78vh] customsm:w-[100%] mx-auto md:flex sm:w-[100%] customsm:h-[480px]  gap-16 md:gap-[4px] sm:gap-[8px] sm:justify-between sm:ml-0  customsm:text-center custom-[gap-14] sm:flex ">
        <section id="section-1" className="w-[50%] md:w-[80%] sml:w-auto sm:w-[60%] custom:w-[50%]   customsm:w-auto  customsm:justify-center smm:text-center smm:w-auto md:text-left ">
        <div className="pt-8 sm:leading-8 leading-[45px] customsm:leading-[50px]  customsm:mx-auto customsm:w-auto smm:mx-auto smm:w-auto ">
          <h3 className="text-[1.8] md:text-[2.2rem] smm:text-[25px]   customsm:text-[25px] sm:text-[20px] text-gray-400 tracking-[0.8px] ">
            Hi,I am
          </h3>
          <h2 className="text-[2.2rem] md:text-[2.6rem] sm:text-[24px] text-gray-300 tracking-[1.5px]">
            Shahzain Ali
          </h2>
        </div>
        <div className="text-[2.8rem] font-bold h-[62px] customsm:w-auto ">
          <div className="text-[2.8rem] md:text-[2.8rem] sml:text-[28px]  smm:text-[34px] customsm:text-[32px]  font-bold h-[60px] leading-[62px] relative top-0  sm:text-[32px] sm:leading-12">
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
        
        {/* #######################  Official websites links #################### */}
        
        <ul className="flex gap-x-4 mt-4 0 w-auto mx-auto customsm:justify-center md:justify-start smm:justify-center sm:my-2">
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

        {/* ############### Buttons Hire Me and Download CV   #################### */}

        <div className="flex my-6 gap-3 customsm:justify-center smm:justify-center md:justify-start sm:my-8 customsm:mt-10">
          <button className="inline-block text-white text-[0.8rem] w-[5rem] h-[1.7rem] bg-[#E46400] rounded-md hover:bg-[#c9492c]">
            Hire Me
          </button>

          <button className="inline-block border border-gray-300 hover:bg-[#363637] hover:text-gray-50 text-[0.8rem] text-gray-300 w-[6.5rem] h-[1.7rem] rounded-md">
            Download CV
          </button>
        </div>
        <section className="flex gap-3 mt-10   justify-center customsm:justify-center customsm:mx-auto sml:w-auto sml:gap-6  sml:pt-4 smm:mx-auto md:mx-0 shadow-secondary rounded-md h-24 w-96 md:h-[120px] md:w-[420px] p-3  md:pt-6 border">
          <div
            className="
          pr-4 md:pr-6 sml:pr-4 leading-[2rem]  relative before:absolute before:content-[''] before:border-l before:border-gray-300 before:right-0 before:h-14"
          >
            <p className="text-[#E46400] text-[1.2rem]">2+</p>
            <h2 className="text-gray-300 sml:text-[12px]">Experience</h2>
          </div>
          <div className="pr-4 md:pr-6 leading-[2rem] relative before:absolute before:content-[''] before:border-l before:border-gray-300 before:right-0 before:h-14">
            <p className="text-[#E46400] text-[1.2rem]">20+</p>
            <h2 className="text-gray-300 sml:text-[12px]">Project Done</h2>
          </div>
          <div className="pr-4 sml:pr-0 leading-[2rem]">
            <p className="text-[#E46400] text-[1.2rem]">30+</p>
            <h2 className="text-gray-300 sml:text-[12px]">Happy Clients</h2>
          </div>
        </section>
      
      </section>

      {/*############## Screen Section ################# */}

      <section id="section-2" className="w-[20%]  md:w-[35%]  md:mr-0 customsm:hidden  smm:hidden md:block sm:w-[40%] sm:mr-0  h-[300px]  mx-auto mr-4">
              <div className="mt-8  border border-red-500 bg-[#ffffffc3] sm:w-[15rem]  md:w-[100%] custom:w-[20rem] w-[20rem] h-[210px] shadow-[0px_0px_5px_rgb(49_48_48),-0px_-0px_10px_rgb(70_69_69)] rounded-lg relative text-ellipsis overflow-hidden group mx-auto" >
                <div className="p-2 rounded-b-lg absolute w-full text-center bg-[#1c1b1b] bottom-0 left-0">
                 <span className="text-transparent relative text-center bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text">
                      LOgo
                </span>
              </div>
              <div className=" w-[50%] sm:w-[70%] mx-auto relative h-full flex flex-col items-center" >
                  <span className="md:w-[220px] md:text-[14px] sm:w-[220px] sm:text-[12px]  custom:text-[16px]  custom:w-[250px] block font-semibold mx-auto md:whitespace-normal md:break-none absolute text-black text-center font-sans opacity-0  h-[120px] bottom-[60%]  group-hover:transition-transform group-hover:duration-[0.6s] ease-in-out group-hover:translate-y-[55%]  group-hover:opacity-100 ">
                          Innovative Solutions for Modern <br /> Challenges. Transforming  <br /> Ideas into Digital <br /> Excellence
                  </span>
                  {/* group-hover:translate-y-[-50%] */}
              </div>
            </div>
       </section>
      </main>
    
      </div>
      
    </div>
    </div>
  );
}
