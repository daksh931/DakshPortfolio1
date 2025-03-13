import AboutSection from "./AboutUsSection";
import WhyChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import OurWork from "./OurWork";

const HomePage = () => {
  return (
    <>
    <div className="bg-black/97 -mt-1 max-w-[100vw]">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <OurWork />
      <ContactUs />
    </div>
    </>
  );
};
export default HomePage;
