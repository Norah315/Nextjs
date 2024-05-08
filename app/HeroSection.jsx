"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../public/glasses.jpg";

import { TypeAnimation } from 'react-type-animation';

/*const ExampleComponent = () => {
   return */
      

const HeroSection = () => {
    return  <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Hello, i'm{" "}</span>
            <br></br>
            <TypeAnimation
      sequence={[
         'Nora',
         1000,
         'Web Developer',
         1000,
         'Game Dev',
         1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      /></h1>
         <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my porfolio!
         </p>
         <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple500 to-pink-500 hover:bg-state-200 text-white mt-3">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
               <span className="block [#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
               </button>
         </div>
         </div>
         <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden ">
            <Image          src={Img1}
            alt="myself"
            className="absolute transform top-5 "
            width={300}
            height={400}
            />
            </div>
         </div>
         </div>
    </section>
};

export default HeroSection;