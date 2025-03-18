import React, { useEffect } from 'react';
import cloud from '../assets/img/cloud.png';
import webdev from '../assets/img/webdev.png';
import devlopment from '../assets/img/devlopment.png';
import it from '../assets/img/it.png';
import seo from '../assets/img/seo.png';
import graphicDesigner from '../assets/img/graphicDesigner.png';
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Services() {

 
    const animateRefs = useRef([]);

    
  useEffect(() => {
    animateRefs.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);


 
    const data = [
    
    {
      "image": devlopment,
      "title": "Web Development",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": it,
      "title": "Full Stack Development",
    "description": "From frontend to backend, I create fully functional web applications using the MERN stack (MongoDB, Express, React, Node.js) with a focus on performance and security.",
    },
  
    {
      "image": cloud,
      "title": "Cloud Services",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": seo,
      "title": "SEO Optimization",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
  ]


  return (
    <div className="  px-8 md:px-24 overflow-hidden bg-[#0E100F] -my-1 min-h-[120vh] ">
      <h2  className="text-4xl font-bold text-center mb-10 text-[#A374FF]  hover:text-[#7467B7] transition-colors delay-75 duration-200 "> Services</h2>
        <div className='flex justify-center items-center space-x-5 flex-wrap'>
        {data.map((item, idx) => (
          <div 
          key={idx}
          // ref={scrollRef}
          ref={(el) => animateRefs.current[idx] = el}
          >
          <ServiceCard
            key={idx}
            className={` `}
            image={item.image}
            title={item.title}
            description={item.description}
          />
      </div>
        ))}
        </div>

    </div>
  );
}

const ServiceCard = ({  image, title, description }) => (

 <div  className="shadow-md  cursor-pointer bg-stone-950/70 shadow-cyan-500/30  hover:shadow-pink-500/50 group  hover:scale-103 transition duration-500 rounded-3xl w-[70vw] my-5 sm:w-[50vw]  md:w-[25vw] lg:w-[20vw] ">
   
    <div className=" flex flex-col items-center h-full justify-between text-center">
    {/* <div className={`flex flex-col md:flex-row md:items-center md:justify-between text-center ${isReversed ? 'md:flex-row-reverse' : ''}`}> */}
      {/* image */}
      <div className="flex md:items-center bg-cover overflow-hidden">
        <img src={image} alt={title} className="h-[12vh] sm:h-[15vh] mt-[1vw] object-contain bg-cover" />
      </div>
      
      {/* line between photo and title desc  */}
      <div className='rotate-0 w-[calc(100%-5%)] h-[1px] bg-cyan-500/30 group-hover:bg-pink-500/50 transition-colors delay-75 duration-200 '>
     
      </div>
  

      {/* title & desc  */}
      <div className="flex flex-col py-5 px-3 md:w-[calc(100%-8%)] md:h-full  md:justify-evenly  text-center">
        <h3 className="md:text-2xl font-semibold mb-2 text-white group-hover:text-[#E443AE] transition-colors delay-75 duration-200">{title} </h3>
        <p className="text-white text-md mb-4 ">{description}</p>
      </div>


    {/* more icon  */}
      <div className="flex w-full items-end justify-end   px-2">
        <div id="know more" className="flex  pb-1 pr-1 font-mono">
          <div className=" flex md:space-x-1.5 text-xl pb-3 pr-3  group-hover:text-pink-500/50 text-white transition-colors delay-75 duration-200">
          
              <FaArrowUpRightFromSquare />
              

          </div>
        </div>
      </div>
    </div>
  </div>


);

export default Services;
