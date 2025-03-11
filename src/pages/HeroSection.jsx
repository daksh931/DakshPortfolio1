import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../assets/img/heroImg1.png";
import webdev from "../assets/img/webdev.png";
import design from "../assets/img/design.png";
import admin from "../assets/img/admin.png";

const contentData = [
  {
    image: heroImg1,
    title: "Best Web Development Company",
    description: "We create high-performing websites that boost your online presence.",
  },
  {
    image: webdev,
    title: "Transform Your Digital Experience",
    description: "Our cutting-edge solutions help your business grow in the digital era.",
  },
  {
    image: admin,
    title: "Custom Web Solutions for You",
    description: "We build tailored websites that match your unique business needs.",
  },
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 8000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center  mx-auto px-6 py-12 space-y-8 md:space-y-0 md:space-x-8 overflow-x-hidden min-h-[80vh] ">
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
        <h2 className="text-3xl text-center sm:text-4xl font-bold text-[#5D9BF6] hover:text-[#1CCBF3] transition-colors delay-75 duration-200 cursor-pointer mb-4">{contentData[index].title}</h2>
        <p className="font-semibold text-lg text-center sm:text-xl text-[#DD5E81] mb-4">{contentData[index].description}</p>
        <a
          href="#explore"
          className="px-6 py-3 bg-cyan-400/60 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyan-500/80 transition duration-300"
        >
          Explore Now
        </a>
      </motion.div>
    </div>
  );
}

export default HeroSection;
