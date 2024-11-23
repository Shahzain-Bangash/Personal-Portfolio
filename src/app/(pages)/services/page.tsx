import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    
  return (
    <div className='p-4' id='service-section'>
    <h1 className=' mx-auto text-gray-300 text-center w-16 border-b border-[#FD6F00]'>Services   <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-16"></span>
    </h1>
       <section className="w-[80vw] p-4 mx-auto grid grid-cols-3 grid-rows-2 gap-y-4 ">
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i> <h2 className='leading-10 text-gray-300'>Frontend Development</h2><p className='text-xs text-gray-400 text-centertext-gray-400'>Create responsive and interactive websites using HTML, CSS, and JavaScript.Ensure smooth user experiences across various <br />devices with optimized <br /> frontend designs.</p></div>
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-100 text-center p-2  transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i><h2 className='leading-10 text-gray-300'>Responsive Web Design</h2><p className='text-xs text-gray-400'>Design mobile-first websites that  adapt <br />to all screen sizes.Deliver a seamless <br /> experience for desktop, tablet, <br />and mobile users.</p> </div>
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i><h2 className='leading-10 text-gray-300'>Next.js Development</h2><p className='text-xs text-gray-400'>Build fast and SEO-friendly websites using Next.js.Enhance performance <br /> with server-side rendering (SSR) <br /> and static site generation (SSG).</p> </div>
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i> <h2 className='leading-10 text-gray-300'>UI/UX Design</h2><p className='text-xs text-gray-400'>Focus on creating intuitive and <br />user-friendly designs.Provide a <br />delightful user experience <br /> through thoughtful UI/UX <br /> design principles.</p></div>
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i> <h2 className='leading-10 text-gray-300'>Landing Page Development</h2><p className='text-xs text-gray-400'>Design high-converting landing pages that effectively capture leads. <br />Implement engaging call-to <br />-actions and optimized <br /> brlayouts.</p></div>
            <div className=" w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"><i className="fas fa-users text-[#FD6F00]"></i> <h2 className='leading-10 text-gray-300'>SEO Optimization</h2><p className='text-xs text-gray-400'>Improve website ranking on search engines using on-page SEO techniques.Optimize content,<br /> metadata, and performance <br />for better visibility.</p></div>
            
        </section>
    </div>
  )
}

export default Services
