import tech1 from "../../assets/img/tech/react.png";
import tech2 from "../../assets/img/tech/vite.png";
import tech3 from "../../assets/img/tech/java.png";
import tech4 from "../../assets/img/tech/jenkins.png";
import tech5 from "../../assets/img/tech/GitHubActions.png";
import tech6 from "../../assets/img/tech/docker.png";
import tech7 from "../../assets/img/tech/tailwind.png";
import tech8 from "../../assets/img/tech/GithubLogo.png";

// const ScrollingComponent = () => {
//   const controls = useAnimation();
//   const x = useMotionValue(0);
//   const [paused, setPaused] = useState(false);
//   const techLogos = [tech1, tech2, tech3, tech4, tech5, tech6];

//   // Start animation function
//   const startAnimation = (currentX = x.get()) => {
//     controls.start({
//       x: [currentX, "-100%"], // 🔥 Continue from current position
//       transition: {
//         repeat: Infinity,
//         duration: 10, // Faster scrolling
//         ease: "linear",
//       },
//     });
//   };

//   useEffect(() => {
//     if (!paused) {
//       startAnimation(); 
//     }
//   }, [paused]);

//   return (
//     <motion.div
//       className="flex space-x-12 min-w-max"
//       animate={controls}
//       style={{ x }}
//       onMouseEnter={() => {
//         setPaused(true);
//         controls.stop(); 
//       }}
//       onMouseLeave={() => {
//         setPaused(false);
//         startAnimation(x.get());
//       }}
//     >
//       {[...Array(3)].map((_, index) => (
//         <React.Fragment key={index}>
//           {techLogos.map((logo, i) => (
//             <motion.img
//               key={i}
//               src={logo}
//               alt="Tech Logo"
//               className="opacity-70 w-24"
//               whileHover={{
//                 scale: 1.1,
//                 cursor: "pointer",
//                 opacity: 1,
//               }}
//             />
//           ))}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   );
// };

const techLogos = [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8];


const ScrollingComponent = () => {
  return (
    <div className="overflow-hidden w-full  py-2 ">
      <div
        className="marquee-track"
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...techLogos, ...techLogos, ...techLogos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="tech"
            className="w-20 h-20 mx-6 opacity-70 hover:scale-110 hover:opacity-100 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};


export default ScrollingComponent;
