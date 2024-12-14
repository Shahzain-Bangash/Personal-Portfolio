import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-8 w-[100vw] landscape:mt-[140px]" id="about-sec">
      <h1 className="text-gray-200 text-center mb-8">
        <span className="border-b border-[#FD6F00] pb-[2px]">About Me</span>
      </h1>
      <div className=" box-border overflow-hidden ">
      <div className="grid grid-cols-[repeat(2,350px)] sm:w-auto lg:w-auto w-auto mx-auto sm:grid-cols-[repeat(2,350px)]  customsm:grid-cols-[repeat(1,300px)]  smm:grid-cols-[repeat(1,400px)] smm:gap-y-7 customsm:gap-y-5  customsm:justify-center smm:justify-center sm:justify-center sm:gap-0 md:gap-x-10 md:justify-center box-border ">
        {/* Image Container */}
        <div className="w-[100%]  max-w-[400px]  md:w-[380px] smm:w-[400px]  customsm:h-[270px] sm:w-[280px] sm:mx-auto smm:order-2 customsm:order-2 smm:justify-center  md:mx-auto sm:h-[320px] md:h-[440px]">
          <div className="h-[440px] smm:w-[100%] customsm:h-[320px]">
              <Image src="/AI_about_3-removebg-preview.png" alt="Artificial Intelligence" width={1000} height={400} className="sm:w-[100%] smm:w-[100%] customsm:h-[270px] sm:h-[320px] w-full h-full"/>
          </div>
        </div>
        
        {/* Text Container */}
        <div className="md:w-[380px]  h-[400px] sm:mx-auto sm:w-[280px] customsm:h-[270px]  smm:h-[340px]  box-border  smm:order-1 ">

          <div className="bg-gray-800 rounded-md p-4 shadow-custom h-[400px] customsm:h-[270px] smm:h-[320px] sm:h-[320px]  relative ">
            {/* Large Screen Text */}
            <p className="text-gray-300 text-justify text-base md:text-[14px]   md:block sm:hidden smm:text-[12px] customsm:hidden" >
              I am an aspiring Artificial Intelligence expert with a strong
              foundation in web development and a passion for emerging
              technologies like Generative AI, Web3, and the Metaverse. Proficient
              in tools like HTML, CSS, Tailwind CSS, TypeScript, Next.js, and
              Python. I combine technical skills with hands-on experience in
              sales, marketing, and client relations. Currently, I am developing my
              expertise in AI technologies, including OpenAI, LangChain, and
              Transformers, to create innovative solutions for global challenges.
              My goal is to leverage my skills to drive impactful change in the
              tech industry while continuously growing as a professional.
            </p>
          <div className="sm:block ">
            {/* Mobile Screen Text */}
            <p className="text-gray-300 text-justify text-sm  md:hidden smm:hidden customsm:block ">
              I am an AI enthusiast with expertise in web development and 
              technologies like Generative AI, Web3, and the Metaverse. Skilled 
              in HTML, CSS, Tailwind, TypeScript, Next.js, and Python, I bring 
              hands-on experience in sales and client relations. Currently, 
              I&apos;m exploring OpenAI, LangChain, and Transformers to develop 
              innovative AI solutions and drive impactful change in tech.
            </p>
            </div>

            {/* Download CV Button */}
            <button className="mt-4 bg-[#E46400] hover:bg-[#c9492c] 
              text-gray-200 px-4 customsm:px-2 customsm:py-2 py-2 rounded-md  b
              items-center justify-center absolute  bottom-4
              text-sm transition duration-300 text-[12px]
              hover:text-gray-50">
              <i className="fa-solid fa-download mr-2 customsm:text-[12px]"></i>
              Download CV
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;


