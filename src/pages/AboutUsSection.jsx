import { Check, CheckCheckIcon, CheckCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import about from "../assets/img/about.png";
import admin from "../assets/img/admin.png";
import { motion } from "framer-motion";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {

  const textRef = useRef(null);
  const descRefs = useRef([]);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current.children, // Selects each letter span,
      { color:  "#8962D5"}, 
      {
        color: "#1CCBF3",
        opacity:1, 
        stagger: 0.002,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 45%",
          end: "top 18%",
          scrub: 1,
        },
      }
    );
   

    descRefs.current.forEach((desc, index) => {
      if (!desc) return;

      gsap.fromTo(
        desc,
        { color: "#888" }, // Start with grey
        {
          color: "#FFF", // Transition to white
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 45%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

  }, []);
return (

  <section className=" py-16 px-8 bg-[#0E100F] -my-1 ">
    <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        {/* <h2 className="text-cyan-400/60 font-semibold">About Us</h2> */}
        <h1 ref={textRef} className="text-4xl  text-[#8962D5] font-bold  mt-2">
        {"A reliable solution for your digital solutions".split("").map((letter, index) => (
              <span key={index} style={{ display: "inline-block" }}>  {letter === " " ? "\u00A0" : letter}  </span>
            ))}
        </h1>
        <div className="mt-6 space-y-6">
          {features.map((feature, index) => (
            <div  key={index} className="flex items-start space-x-4 group">
              <div>
                <CheckCircle size={24} color="orange" />
              </div>
              <div>
                <h3  className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p  ref={(el) => (descRefs.current[index] = el)}
                    className="font-semibold text-gray-500"> {feature.description}  </p>
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
