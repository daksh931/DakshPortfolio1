import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import design from "../assets/img/design.png";
import tech1 from "../assets/img/tech/react.png";
import tech2 from "../assets/img/tech/vite.png";
import tech3 from "../assets/img/tech/java.png";
import tech4 from "../assets/img/tech/jenkins.png";
import tech5 from "../assets/img/tech/react.png";
import tech6 from "../assets/img/tech/tailwind.png";

import { Pointer, PointerIcon } from "lucide-react";
import projectData from "./ProjectData";
import ScrollingComponent from "./Components/ScrollTab";

// const projectData = {
//   recotech: {
//     title: "Recotech",
//     description: "This is the Recotech project description...",
//     image: recotech,
//   },
//   "music-school": {
//     title: "Music School",
//     description: "This is the Music School project description...",
//     image: MusicSchool,
//   },
//   signoracucina: {
//     title: "Signora Cucina - A Premium Food Delivery Experience",
//     description:
//       "Signora Cucina is a modern and seamless food delivery application designed to bring delicious meals straight to your doorstep. Developed by our team using React.js, Node.js, and other cutting-edge technologies, this platform ensures a smooth and intuitive user experience.With a focus on efficiency",
//     image: signoracucina,
//   },
//   slabpro: {
//     title: "Slab Pro",
//     description: "This is the Slab Pro project description...",
//     image: design,
//   },
// };

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId]; // Get project details from object

  console.log(project.length)
  if (!project) {
    return <h1 className="text-3xl text-center mt-10">Project Not Found</h1>;
  }
  const navigate = useNavigate();

  const features = [
    {
      title: "User-Friendly Interface ",
      description:
        "A responsive and visually appealing UI for a hassle-free experience.Built with scalability and performance in mind, Signora Cucina is a perfect blend of technology and culinary delight. 🍽️🚀 Browse menus, customize dishes, and place orders effortlessly.",
      image: design,
    },
    {
      title: "Secure Payments",
      description:
        "Advanced security features ensure that your data is protected at all times.",
      image: design,
    },
    {
      title: "Real-time Tracking",
      description: "Keep an eye on your order status in real time.",
      image: design,
    },
  ];
  const testimonials = [
    {
      quote:
        "This product completely transformed our business! Highly recommend.",
      name: "John Doe",
    },
    {
      quote:
        "The team was very professional and delivered beyond expectations.",
      name: "Jane Smith",
    },
    {
      quote: "Excellent service and outstanding results. Would use again!",
      name: "Alex Brown",
    },
    {
      quote: "A truly game-changing experience! The best investment ever.",
      name: "Sarah Johnson",
    },
    {
      quote: "Fast, reliable, and top-notch quality. Absolutely fantastic.",
      name: "Michael Lee",
    },
  ];
  const techLogos = [tech1, tech2, tech3, tech4, tech5, tech6];

  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  return (
    <div className="px-6 lg:px-24 py-16 bg-[#191917]">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 text-gray-500 text-sm">
        <span
          className="cursor-pointer text-blue-500 hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        // <span className="text-gray-700 font-semibold">Our Work</span>
      </div>



      {/* Project Title
      <h1 className="text-4xl font-bold text-gray-900">{project[0].title}</h1>
      {/* Project Description & Image */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {project[0].description}
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={project[0].image}
            alt={project[0].title}
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </motion.div>
      </div>  */}
      
      {/* Features */}
      <div className="space-y-28 sm:px-5 sm:space-x-10">
        {project.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 font-sans items-start lg:grid-cols-2 gap-8 border-b-[1px] border-orange-500 pb-10"
          >
            {index % 2 === 1 ? (
              <>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{scale: 1.05}}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full max-w-lg "
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold  mb-7  text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    {feature.description}
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div 
                
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  
                >
                  <h2 className="text-2xl mb-7 font-bold text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    {feature.description}
                  </p>
                </motion.div>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{scale: 1.05}}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full max-w-lg"
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Tech Stack - Auto Running Logos */}
      <div className="my-16 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Tech Stack Used
        </h2>

        <div className="relative flex items-center w-full">
          {/* <motion.div
            className="flex space-x-12 min-w-max"
            animate={controls}
            initial={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            onMouseEnter={() => {
              setPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => {
              setPaused(false);
              controls.start({ x: ["0%", "-50%"] });
            }}
          >
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                {techLogos.map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo}
                    alt="Tech Logo"
                    className="opacity-70 w-24"
                    whileHover={{
                      scale: 1.1,
                      cursor: Pointer,
                      opacity: 1,
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div> */}
          <ScrollingComponent/>

          {/* Fade Effect at Ends */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-100 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-100 to-transparent"></div>
        </div>
      </div>

      {/* Happy Clients */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
        <p className="text-lg text-gray-700 mt-2">
          Our customers love what we do! See their feedback below.
        </p>

        {/* Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700">"{client.quote}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">
                - {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  
}
