import AboutSection from "./AboutUsSection";
import WhyChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import Services from "./Services";

const HomePage = () => {
  return (
    <>
    <div className="bg-[#0E100F]  -mt-1 max-w-[100vw]">
      <HeroSection />
      <AboutSection />
      <Services />
      {/* <OurServices /> */}
      <WhyChooseUs />
      <OurWork />
      <ContactUs />
    </div>
    </>
  );
};
export default HomePage;
