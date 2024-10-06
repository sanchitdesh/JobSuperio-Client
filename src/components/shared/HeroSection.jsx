import React from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-200 py-12 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Left Part */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold mb-4 md:mb-6">
            There Are <span className="text-[#1967d2]">93,178</span> Postings
            Here
            <span className="block mt-1 md:mt-1 text-[#333]">For You!</span>
          </h1>
          <p className="text-[#696969] text-sm md:text-base mb-6 md:mb-8">
            Find Jobs, Employment & Career Opportunities
          </p>

          <div className="border border-gray-400 rounded-full bg-white px-4 py-3 w-full max-w-xxl flex items-center space-x-4 mx-auto shadow-md">
            <div className="flex items-center flex-grow">
              <CiSearch className="text-xl text-gray-600" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full py-2 px-3 outline-none rounded-md text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="w-px bg-gray-400 h-6 mx-2"></div>
            <div className="flex items-center flex-grow">
              <CiLocationOn className="text-xl text-gray-600" />
              <input
                type="text"
                placeholder="City or Postal Code"
                className="w-full py-2 px-3 outline-none rounded-md text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="py-2 px-4 text-sm text-white bg-[#1967d2] hover:bg-[#0146a6] rounded-md whitespace-nowrap transition duration-300 ease-in-out">
              Find Jobs
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-700">Popular Searches:</span> Designer, Developer, Web, IOS, PHP, Senior, Engineer
          </p>
        </div>

        {/* Right Part */}
        <div className="flex justify-center w-full lg:w-1/2 lg:pl-8">
          <img
            src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fbanner-img-1.png&w=1920&q=75"
            alt="Job Search Banner"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
