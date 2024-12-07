import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-8 "  id="about-sec">
      <h1 className="text-gray-200 text-center mx-auto  w-20">
        <span className="border-b border-[#FD6F00] pb-[2px]">About Me</span>
      </h1>
      <section className="flex md:place-items-center p-4 pt-8 customsm:px-2">
        <div className="w-[50%] md:w-[40%] mx-auto pl-8 py-1 pr-4 h-[340px] customsm:h-[240px] customsm:my-auto smm:w-[50%] smm:h-[320px]">
          <Image src="/AI_about_3-removebg-preview.png" alt="Artificial Intelligence" width={1000} height={400} className="w-full h-full"></Image>
        </div>
        <div className="w-[50%] md:w-[50%] h-[320px] customsm:h-[320px] smm:w-[50%]  mx-auto customsm:pt-8 md:pr-8 sm:pr-6 md:-mt-6 ">
        <div className="flex flex-col justify-center rounded-md  md:ml-auto  md:pr-10 customsm:h-[250px] customsm:ml-auto customsm:mr-6  shadow-custom md:h-[325px] sm:h-[320px] smm:h-[300px] px-6 smm:px-4 customsm:px-2 ">
          <p className="text-gray-300 text-justify text-[14px] customsm:hidden md:text-[12px]  sm:text-[10.5px] smm:text-[8px] customsm:text-[6px]">
            I am an aspiring Artificial Intelligence expert with a strong
            foundation in web development and a passion for emerging
            technologies like Generative AI, Web3, and the Metaverse. Proficient
            in tools like HTML, CSS, Tailwind CSS, TypeScript, Next.js, and
            Python.I combine technical skills with hands-on experience in
            sales, marketing, and client relations. Currently,I am developing my
            expertise in AI technologies, including OpenAI, LangChain, and
            Transformers, to create innovative solutions for global challenges.
            My goal is to leverage my skills to drive impactful change in the
            tech industry while continuously growing as a professional.
          </p>
          <p className="customsm:text-[6px] text-gray-300 customsm:block smm:hidden sm:hidden md:hidden ">&quot;I am an AI enthusiast with expertise in web development and technologies like Generative AI, Web3, and the Metaverse. Skilled in HTML, CSS, Tailwind, TypeScript, Next.js, and Python, I bring hands-on experience in sales and client relations. Currently, I&apos;m exploring OpenAI, LangChain, and Transformers to develop innovative AI solutions and drive impactful change in tech.</p>
          <button className="inline-block mt-4 bg-[#E46400] hover:text-gray-50 hover:bg-[#c9492c] text-[0.8rem] customsm:text-[5px] smm:text-[8px] sm:text-[10px] text-gray-200 w-[7.5rem] h-[1.7rem] sm:w-[100px] sm:h-[20px] customsm:w-[80px] customsm:h-[18px]  customsm:rounded-sm rounded-md">
            <i className="fa-solid fa-download mr-2 "></i>
            Download CV
          </button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
