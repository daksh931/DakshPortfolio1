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

function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <>
   

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
   
    </>
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
