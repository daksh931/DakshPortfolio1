import React from 'react';
import cloud from '../assets/img/cloud.png';
import webdev from '../assets/img/webdev.png';
import devlopment from '../assets/img/devlopment.png';
import it from '../assets/img/it.png';
import seo from '../assets/img/seo.png';
import graphicDesigner from '../assets/img/graphicDesigner.png';
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


function OurServices() {

  const data = [
    {
      "image": graphicDesigner,
      "title": "Graphic Designer",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": devlopment,
      "title": "Web Development",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": it,
      "title": "Content Writing",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": devlopment,
      "title": "Photography",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": seo,
      "title": "SEO Optimization",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    },
    {
      "image": cloud,
      "title": "Cloud Services",
      "description": "Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
    }
  ]


  return (
    <div className="mx-8 md:mx-24 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#A374FF]  hover:text-[#7467B7] transition-colors delay-75 duration-200 "> Services</h2>
        {data.map((item, idx) => (
          <div 
          key={idx}
          className={`md:my-18 flex flex-col ${idx % 2 !== 0 ? 'md:items-end': 'md:items-start'} w-full h-full `} >
          <ServiceCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
      </div>
        ))}

    </div>
  );
}

const ServiceCard = ({ image, title, description }) => (
 
  

 <div className="shadow-md  cursor-pointer bg-black shadow-cyan-500/30  hover:shadow-pink-500/50 group  hover:scale-103 transition duration-500 rounded-3xl md:h-[60vh] md:w-[47vw] ">
   
    <div className=" flex flex-col md:flex-row md:items-center md:justify-between text-center">
    {/* <div className={`flex flex-col md:flex-row md:items-center md:justify-between text-center ${isReversed ? 'md:flex-row-reverse' : ''}`}> */}
      {/* image */}
      <div className="flex  md:items-center md:h-[60vh]  md:w-[22vw] bg-cover overflow-hidden">
        <img src={image} alt={title} className=" object-contain bg-cover" />
      </div>
      
      {/* line between photo and title desc  */}
      <div className='rotate-0 md:h-86 md:w-[1px]  bg-cyan-500/30 group-hover:bg-pink-500/50 transition-colors delay-75 duration-200 '>
     
      </div>
  

      {/* title & desc  */}
      <div className="flex flex-col py-5 px-3 md:w-[20vw] md:h-full  md:justify-evenly  text-center">
        <h3 className="md:text-3xl font-semibold mb-2 text-white group-hover:text-[#E443AE] transition-colors delay-75 duration-200">{title} </h3>
        <p className="text-white text-xl mb-4 ">{description}</p>
      </div>


    {/* more icon  */}
      <div className="flex  md:h-full px-2">
        <div id="know more" className="w-full  flex items-end  justify-end  pb-1 pr-1 text-white font-mono">
          <div className=" flex md:space-x-1.5 text-xl pb-2 items-center group-hover:text-pink-500/50 transition-colors delay-75 duration-200">
            <FaArrowUpRightFromSquare />

          </div>
        </div>
      </div>
    </div>
  </div>


);

export default OurServices;
