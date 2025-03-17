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


function OurServices() {

 
    const animateRefs = useRef([]);

    
  useEffect(() => {
    animateRefs.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

    // useEffect(() => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: animateRefs.current, // The section that contains all items
    //       start: "top 20%", // Start when 80% of the container is in view
    //       toggleActions: "play none none none",
    //     },
    //   });
  
    //   tl.fromTo(
    //     animateRefs.current,
    //     { opacity: 0, y: 100 },
    //     { opacity: 1, y: 0, duration: 2, stagger: 0.3, ease: "power3.out" }
    //   );
    // }, []);
    // const elements = gsap.utils.toArray(".animate-item"); // Get all elements

    // useEffect(() => {
    //   elements.fromTo(".animate-item",
    //   { opacity: 0, y: 100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 3,
    //     delay:1,
    //     stagger: 0.7, // Delay between animations
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: ".animate-item",
    //       start: "top 70%", // Start animation when 80% of the element is in view
    //       toggleActions: "play none none none",
    //     },
    //   }
    //  )
    // }, [])
 
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
    <div className="  px-8 md:px-24 overflow-hidden bg-[#0E100F] -my-1 ">
      <h2  className="text-4xl font-bold text-center mb-10 text-[#A374FF]  hover:text-[#7467B7] transition-colors delay-75 duration-200 "> Services</h2>
        <div>
        {data.map((item, idx) => (
          <div 
          key={idx}
          // ref={scrollRef}
          ref={(el) => animateRefs.current[idx] = el}
          className={`animate-item  my-18 flex flex-col items-center ${idx % 2 !== 0 ? 'md:items-end': 'md:items-start'}  h-full `} >
          <ServiceCard
            key={idx}
          
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
 
  

 <div  className="shadow-md  cursor-pointer bg-[#0E100F] shadow-cyan-500/30  hover:shadow-pink-500/50 group  hover:scale-103 transition duration-500 rounded-3xl w-[75vw] md:h-[60vh] md:w-[42vw] ">
   
    <div className=" flex flex-col md:flex-row md:items-center h-full md:justify-between text-center">
    {/* <div className={`flex flex-col md:flex-row md:items-center md:justify-between text-center ${isReversed ? 'md:flex-row-reverse' : ''}`}> */}
      {/* image */}
      <div className="flex justify-center md:justify-start  md:items-center h-[40vw]  md:h-[60vh]  md:w-[17vw] bg-cover overflow-hidden">
        <img src={image} alt={title} className=" object-contain bg-cover" />
      </div>
      
      {/* line between photo and title desc  */}
      <div className='rotate-0 md:h-86 md:w-[1px]  bg-cyan-500/30 group-hover:bg-pink-500/50 transition-colors delay-75 duration-200 '>
     
      </div>
  

      {/* title & desc  */}
      <div className="flex flex-col py-5 px-3 md:w-[20vw] md:h-full  md:justify-evenly  text-center">
        <h3 className="md:text-2xl font-semibold mb-2 text-white group-hover:text-[#E443AE] transition-colors delay-75 duration-200">{title} </h3>
        <p className="text-white text-md mb-4 ">{description}</p>
      </div>


    {/* more icon  */}
      <div className="flex h-full   px-2">
        <div id="know more" className="w-full md:h-full  flex items-end  justify-end  pb-1 pr-1 text-white font-mono">
          <div className=" flex md:space-x-1.5 text-xl pb-2  group-hover:text-pink-500/50 transition-colors delay-75 duration-200">
          
              <FaArrowUpRightFromSquare />
              

          </div>
        </div>
      </div>
    </div>
  </div>


);

export default OurServices;
