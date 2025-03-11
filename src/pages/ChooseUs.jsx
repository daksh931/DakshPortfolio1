import React from "react";
import goals from "../assets/img/goals.png";
import { motion } from "framer-motion";

function WhyChooseUs() {
  return (
    <div className="my-16 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          {/* <h2 className="text-orange-500 font-semibold">Choosing </h2> */}
          <h1 className="text-4xl font-bold  text-[#A374FF] hover:text-[#A165FF]/70 cursor-pointer transition-colors delay-75 duration-200 mt-2">
            Achieve your business goals with our web development solutions{" "}
          </h1>
          <p className="mt-4 text-lg leading-5.5 text-white">
            In today’s digital age, we understand online presence is very
            important for every size of business. That’s why we offer only our
            best and most expert web development solutions that help you achieve
            your business goals. With our team of experienced web designers, we
            can create all types of websites that not only look good but also
            attract more visitors and provide you with the best results.
            Moreover, our website designs are fully adaptable, so you can make
            any new changes in the future if you want without worrying about
            coding and website design.
          </p>
          <br />
          <p className="text-white">
            At Techiee, we’re not just building websites, we’re crafting digital
            masterpieces that move your business forward. Join hands with us,
            and see the unforgettable results and success of your business.
          </p>
        </div>
        {/* Right side image */}
        <div className="flex justify-center">
          <motion.img
            src={goals}
            alt="Illustration"
            className="w-full max-w-lg"
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
