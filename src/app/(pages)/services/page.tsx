import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    
  return (
    <div className="p-4 customsm:px-0 sm:p-1 smm:p-1 " id="service-sec">
      <div className="">
      <h1 className=" mx-auto my-0 text-gray-300 text-center w-16 border-b border-[#FD6F00]">
        Services
        <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-16"></span>
      </h1>
      <section className="md:w-auto customsm:grid-cols-2 customsm:place-items-center sm:pt-1 smm:mt-3 smm:gap-y-4  sm:gap-y-4 customsm:w-auto  customsm:gap-y-3 smm:grid-cols-2 smm:py-0 smm:w-auto md:gap-y-4 lg:gap-y-4 smm:place-items-center mt-2   sm:place-items-center smm:text-[12px] sm:text-[12px] md:text-[16px]   sm:w-[80%] sm:grid-cols-2 md:grid-cols-3  custom2:w-[90vw] custom:w-[82vw]  custom:text-[16px]  mx-auto py-4 md:place-items-center grid grid-cols-3 grid-rows-2 ">
        <div className=" w-[240px] md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px] customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:p-1 smm:w-[220px]  smm:text-center smm:h-[140px] h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center  transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00]"></i>
          <h2 className="leading-10 md:leading-8  customsm:text-[0.7rem] customsm:leading-[18px] smm:leading-[20px] sm:leading-[20px]  smm:text-[11px]  md:text-[14px]   text-gray-300">Frontend Development</h2>
          <p className="customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400 text-centertext-gray-400">
            Create responsive and interactive websites using HTML, CSS, and
            JavaScript.Ensure smooth user experiences across various 
            devices with optimized  frontend designs.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[10px] md:text-[14px]  text-gray-400 text-centertext-gray-400">
            Create interactive, responsive websites using HTML, CSS, JavaScript, and Next.js.
          </p>
        </div>
        <div className=" w-60   custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px] smm:h-[140px] smm:p-1 md:w-[240px]  md:h-44 rounded-lg bg-[#1f1e1e] text-gray-100 text-center p-2  transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00] sm:p-0"></i>
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px]  smm:text-[12px] sm:leading-[20px]  md:text-[14px]  text-gray-300">Responsive Web Design</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px]  md:text-[14px]  text-gray-400">
            Design mobile-first websites that adapt <br />
            to all screen sizes.Deliver a seamless <br /> experience for
            desktop, tablet, <br />
            and mobile users.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
             Design mobile-friendly websites that work smoothly on all devices.
          </p>
        </div>
        <div className=" w-60 md:w-[240px] custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 md:h-44 smm:w-[220px]  smm:h-[140px] smm:p-1  h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00]"></i>
          <h2 className="md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px]   smm:leading-[20px] sm:leading-[20px]  smm:text-[12px]  md:text-[14px]   text-gray-300">Next.js Development</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Build fast and SEO-friendly websites using Next.js.Enhance
            performance <br /> with server-side rendering (SSR) <br /> and
            static site generation (SSG).
          </p>
          <p className="text-xs customsm:block hidden  smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Build fast websites with SEO features using Next.js.
          </p>
        </div>
        <div className=" w-60 md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px]  smm:h-[140px] smm:p-1  h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px] smm:text-[12px]   md:text-[14px]   text-gray-300">UI/UX Design</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px] text-gray-400">
            Focus on creating intuitive and <br />
            user-friendly designs.Provide a <br />
            delightful user experience <br /> through thoughtful UI/UX <br />{" "}
            design principles.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px] text-gray-400">
            Create user-friendly and attractive designs for better experiences.
          </p>
        </div>
        <div className=" w-60 md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:h-[140px] smm:p-1  smm:w-[220px] h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px] smm:text-[12px]  md:text-[14px]   text-gray-300">Landing Page Development</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Design high-converting landing pages that effectively capture leads.{" "}
            <br />
            Implement engaging call-to <br />
            -actions and optimized <br /> brlayouts.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Design engaging pages to capture leads effectively.
          </p>
        </div>
        <div className=" w-60  md:w-[240px] md:h-44 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px]  smm:h-[140px] smm:p-1  custom:w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-users text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px]  smm:text-[12px] md:text-[14px]   text-gray-300">SEO Optimization</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Improve website ranking on search engines using on-page SEO
            techniques.Optimize content,
            <br /> metadata, and performance <br />
            for better visibility.
          </p>
          <p className="customsm:block hidden text-xs smm:text-[8px]  text-gray-400">
            Improve site ranking with optimized content and metadata.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Services;
