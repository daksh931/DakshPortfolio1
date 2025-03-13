import { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import heroImg1 from "../assets/img/heroImg1.png";
import webdev from "../assets/img/webdev.png";
import design from "../assets/img/design.png";
import admin from "../assets/img/admin.png";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    image: heroImg1,
    title: "Building Scalable Web Applications",
    description: "I specialize in creating high-performance, scalable web applications using modern technologies.",
  },
  {
    image: webdev,
    title: "MERN Stack & Backend Development",
    description: "Expertise in MERN stack, Node.js, and scalable backend solutions for businesses and startups.",
  },
  {
    image: admin,
    title: "Cloud & API Integrations",
    description: "Seamless API integrations, cloud deployment, and optimized server-side logic for robust applications.",
  },
];


function HeroSection() {
  const [index, setIndex] = useState(0);
  const titleRef = useRef(null);
  const circleref = useRef(null);
  const hoverTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { color: "#1CCBF3" }, // Start with blue
    {
      color: "#5D9BF6", // Change to pink
      duration: 2.2,
      ease: "bounce.out",
    }
      );
    }
  }, []);

  useEffect(() => {
    hoverTL.current = gsap.timeline({ paused: true })
      .to(circleref.current, { width: "100%", ease: "elastic.out(0.45)", duration: 0.5 })
      .to(circleref.current, { width: "15%", left: "76%", ease: "elastic.out(0.25)", duration: 0.5 });
  }, []);

  const onMouseEnter = () => {  
    hoverTL.current.restart();
  };

  const onMouseLeave = () => {
    hoverTL.current.reverse();
  };

  // Auto-Switching Content
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 8000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="relative flex flex-col md:flex-row items-center mx-5 sm:mx-20 px-6 py-12 space-y-8 md:space-y-0 md:space-x-8 overflow-x-hidden  min-h-[80vh] ">
        {/* Left Side Image (Comes from Left) */}
        <motion.div
          key={contentData[index].image}
          className="flex justify-center w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 3, ease: "easeOut" }}

        >
          <div className="">
            <img src={contentData[index].image} alt="Illustration" className="w-full max-w-lg " />
          </div>
        </motion.div>

        {/* Right Side Content (Comes from Right) */}
        <motion.div
          key={contentData[index].title}
          className="w-full  md:w-1/2 flex flex-col items-center text-center md:text-left "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
              {/* Title Animation */}
          <h2 
            ref={titleRef}
            className="text-3xl text-center sm:text-4xl font-bold text-[#5D9BF6] hover:text-[#1CCBF3] transition-colors delay-75 duration-200 cursor-pointer mb-4">{contentData[index].title}</h2>
          <p className="font-semibold text-lg text-center sm:text-xl text-[#DD5E81] mb-4">{contentData[index].description}</p>
          <button
            className="explore mt-10 cursor-pointer px-6 py-3 bg-cyan-400/60 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyan-500/80 transition duration-300"
          >
            Explore Now
          </button>
        </motion.div>

      </div>

      {/* explore gsap button  */}
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className=" justify-self-center text-white flex justify-center  font-bold items-center text-center text-[1.3em] w-[13em] relative">
        <div ref={circleref} className="absolute left-0 circle h-[1.8em]  w-[1.8em] rounded-full bg-pink-600/80  ">
        </div>

        <button className="text-nowrap flex items-center  z-10 relative cursor-pointer">
          Connect with Me
           <span className="pl-2">   <FaLongArrowAltRight />
            </span>

        </button>
      </div>
    </>
  );
}

export default HeroSection;
