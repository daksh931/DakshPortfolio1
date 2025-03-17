import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurWork from "./pages/OurWork";
import ProjectDetails from "./pages/Projects";
import AboutSection from "./pages/AboutUsSection";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import Navbar from "./pages/Navbar";
import { motion, useScroll } from "framer-motion";
import Footer from "./pages/Footer";
import Lenis from "@studio-freight/lenis"; // Import Lenis
import { useEffect, useRef } from "react";


function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  // const lenisRef = useRef(null);

  // useEffect(() => {
  //   lenisRef.current = new Lenis({
  //     smooth: true,
  //     lerp: 0.3,
  //   });

  //   let lastTime = 0;

  //   // Throttle the scroll updates for performance
  //   const raf = (time) => {
  //     if (time - lastTime > 10) { // Only update every 10ms (you can adjust this)
  //       lenisRef.current.raf(time);
  //       lastTime = time;
  //     }
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenisRef.current.destroy();
  //   };
  // }, []);
  return (
    <div className=" ">
   

      <Navbar />
      <motion.div
        className="bg-[#A374FF] h-[2px] sticky top-17 z-10 origin-left rounded-xl"
        style={{ scaleX: scrollYProgress }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/work" element={<OurWork />} />
//   <Route path="/services" element={<OurServices />} />
//   <Route path="/projects/:projectId" element={<ProjectDetails />} />
//   <Route path="/about" element={<AboutSection />} />
//   <Route path="/contact" element={<ContactUs />} />

// </Routes>
