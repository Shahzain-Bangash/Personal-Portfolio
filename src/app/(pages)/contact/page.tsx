"use client"
import React from "react";

const Contact = () => {

  return (
    
    
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-gray-200 text-center mx-auto mb-2">
          <span className="border-b border-[#FD6F00] pb-[2px]">Contact Me</span>
        </h1>
        <p className="text-gray-400 ">
          Reach Out: Let&apos;s Turn Ideas into Action and Drive Results
        </p>
        <form action="" className="text-gray-200 my-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none focus:none"
            required
          />{" "}
          <br />
          <div className="flex justify-center border border-white">
      <select
              id="country-code"
              name="country-code"
              className="h-[32px] border border-white bg-[#282828] rounded-l-md focus:outline-none cursor-pointer  overflow-y-auto"
            >
              <option value="+92">+92</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+49">+49</option>
              <option value="+33">+33</option>
              <option value="+31">+31</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
        {/* <!-- Add more country codes here --> */}
            </select>
          <input
              type="number"
              placeholder="Phone Number"
              className="bg-[#282828] border-l border-gray-400 text-xs h-8 pl-3 mb-4 w-60 rounded-r-[6px] focus:outline-none"
              required
            />

         
            <br />
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none"
            required
          />{" "}
          <br />
          <select
            name=""
            id=""
            className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72"
          >
            <option value="" className="tracking-[12px]">
              Service Of Interest
            </option>
            <option value="">Frontend Development</option>
            <option value="">UI/UX design</option>
            <option value="">Landing Page</option>
            <option value="">Responsive Web Design</option>
            <option value="">Next.js Development</option>
          </select>{" "}
          <br />
          <textarea
            name=""
            id=""
            className="bg-[#282828] text-xs text-gray-400 pt-2 h-36 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none resize-none"
          >
            Project Details...
          </textarea>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
