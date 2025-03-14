import { Check, CheckCheckIcon, CheckCircle } from "lucide-react";
import React, { useRef } from "react";
import about from "../assets/img/about.png";
import admin from "../assets/img/admin.png";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const AboutSection = () => {

  return (
   
    <section className=" py-16 px-8 bg-black/97 -my-1 ">
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* <h2 className="text-cyan-400/60 font-semibold">About Us</h2> */}
          <h1 className="text-4xl font-bold text-[#ED5F5E] hover:text-[#F37384]  transition-colors delay-75 duration-200 cursor-pointer mt-2">
           A reliable solution for your digital solutions
          </h1>
          <div className="mt-6 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div>
                  <CheckCircle size={24} color="orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-light text-white/98">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center overflow-hidden ">
          <motion.img
            src={admin}
            alt="Illustration"
            className="w-[60vw] sm:w-full "
            
            initial={{ opacity: 0, x: 100 }} // Starts outside the screen
            whileInView={{ opacity: 1, x: 0 }} // Moves into view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        
          />
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    title: "Full-Stack Development Expertise",
    description:
      "I specialize in building scalable, high-performance web applications using the MERN stack, Node.js, and cloud-based solutions.",
  },
  {
    title: "Quality-Driven Development",
    description:
      "Delivering clean, efficient, and maintainable code with a strong focus on performance and best practices.",
  },
  {
    title: "Industry Experience",
    description:
      "With experience in backend architecture, API development, and cloud deployment, I create reliable and optimized solutions.",
  },
  {
    title: "Tailored Solutions",
    description:
      "Custom web development solutions designed to meet the unique needs of businesses and startups.",
  },
];


export default AboutSection;
