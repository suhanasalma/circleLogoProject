import React from 'react';
import './hero.css'
import { Icon } from "@iconify/react";


const Hero = () => {
   return (
     <section className="flex justify-center items-center  h-[800px] relative">
       <div>
         <div className="w-96 h-72 bg-gradient-to-b from-[#BFC3D2] to-gray absolute right-[800px] shadow-inner  bottom-80"></div>

         <div className="border-[#D6DDEB] border-[40px] w-96 h-96 rounded-full absolute bottom-80 right-[650px] drop-shadow-sm shadow-lg  circle"></div>
       </div>

       <div className=" space-y-4 absolute bottom-[250px] right-[400px]">
         <h1 className="text-3xl font-bold">
           Interfaces that made <br /> the technology natural
         </h1>
         <p className="text-darkgray text-xs">
           Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
           Recusandae inventore eos.
         </p>
         <button>Learn More</button>
         <button className="absolute right-[550px] bottom-0  w-52 p-2 rounded-full bg-black text-[#ffffff] flex items-center gap-2 justify-center">
           <span>
             <Icon icon="ri:apple-fill" />
           </span>{" "}
           Download for free
         </button>
       </div>
     </section>
   );
};

export default Hero;