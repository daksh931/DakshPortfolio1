import React from "react";
import goals from "../assets/img/goals.png";
import { motion } from "framer-motion";

function WhyChooseUs() {
  return  (
    <div className="my-16 px-6 lg:px-24 bg-[#0E100F]  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-15 text-[#A374FF] hover:text-[#A165FF]/70 cursor-pointer transition-colors delay-75 duration-200 mt-2">
            Building Scalable & High-Performance Web Applications
          </h1>
          <p className="mt-4 text-lg leading-5.5 text-white">
            As a Full Stack developer, I specialize in creating robust, 
            scalable, and efficient web applications. With expertise in 
            React.Js, Node.js, ExpressJs, SQL/No SQL, and cloud-based solutions, I build 
            high-quality systems that drive business growth.
          </p>
          <br />
          <p className="text-white">
            My focus is on delivering secure, maintainable, and optimized 
            backend solutions that enhance user experience and efficiency. 
            Whether it's API development, authentication, or database 
            optimization, I ensure seamless functionality for your web 
            applications.
          </p>
        </div>
        {/* Right side image */}
        <div className="w-[45vw] sm:w-[30vw]   overflow-hidden">
          <motion.img
            src={goals}
            alt="Illustration"
            className="w-[65vw] "
            initial={{ opacity: 0, x: 100 }} // Starts outside the screen
            whileInView={{ opacity: 1, x: 0 }} // Moves into view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
