import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Layers, Mail } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen])

  const navLinks = [
    { path: "/", label: "Home", icon: <Home /> },
    { path: "/about", label: "About Me ", icon: <Info /> },
    { path: "/services", label: " Services", icon: <Briefcase /> },
    { path: "/work", label: "My Work", icon: <Layers /> },
    { path: "/contact", label: "Contact Me", icon: <Mail /> },
  ];

  // theme 
  const [theme, setTheme] = useState(() => {
    // Get stored theme from localStorage or default to 'light'
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";
  });

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  // Apply theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className="sticky  top-0 z-10 bg-black ">
      <div className="shadow-lg hover:shadow-xl z-10   ">
        <div className=" w-full mx-0.5  py-1 sm:flex justify-between  ">


          <div className=" py-3 px-6 flex justify-between  ">

            <div className="">
              <Link
                to="/"
                className="text-3xl font-bold text-cyan-600 hover:text-[#A374FF] transition-colors delay-75 duration-200 "
              >
                {/* <img src={Logo} alt="XTech" className="max-w-25 -p-2 rounded-3xl" /> */}
                Daksh
              </Link>
            </div>

            <div className="sm:hidden text-white  ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-white"
              >
                {isOpen ? <X size={28} /> : <Menu  size={28} />}
              </button>
            </div>
          </div>


          {/* desktop nav items map  */}
          <div id="nav items" className="   text-white font-mono mt-1 ">
            <div className="hidden sm:block">
              <div className="sm:flex  flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 hidden whitespace-nowrap  ">
                <nav className="flex space-x-1">
                  {navLinks.map((link, index) => (
                    
                    // <Link
                    //     key={index}
                    //     to={link.path}
                    //     className="flex text-2xl items-center relative group p-2 "
                    // >
                    //     <span className="mr-2 z-10">{link.icon}</span>

                    //     {/* Wrapper for text and background */}
                    //     <span className="relative z-10 overflow-hidden py-1 px-2 rounded-sm">
                    //         {/* Background color (placed behind text) */}
                    //         <span className="absolute bottom-0 left-0 w-full h-full bg-orange-500 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 z-0"></span>

                    //         {/* Text */}
                    //         <span className="relative z-10 group-hover:text-black">
                    //             {link.label}
                    //         </span>
                    //     </span>
                    // </Link>
                    <Link
                      key={index}
                      to={link.path}
                      className="flex text-md items-center relative group p-2 "
                    >
                      <span className="mr-2 z-10">{link.icon}</span>

                      {/* Wrapper for text and background */}
                      <span className="relative z-10 overflow-hidden py-1 px-2 rounded-sm">
                        {/* Slanted Background (Top-Only) */}
                        <span
                          className="absolute top-0 left-0 w-full h-full bg-cyan-600/80 transform scale-y-0 group-hover:scale-y-100 transition duration-500 origin-top z-0"
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 10%, 100% 100%, 3% 100%)",
                          }}
                        ></span>

                        {/* Text */}
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {link.label}
                        </span>
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button> */}
              </div>
            </div>
          </div>

          {/* Mobile side ------------------------------>>>> */}
          {/* <div className={`absolute top-16 left-0 w-full bg-white shadow-sm transition-transform transform 
                    ${isOpen ? "translate-y-0" : "-translate-y-full"} sm:hidden`}> */}
          <div
            className={`${isOpen ? "block" : "hidden"
              } flex sm:hidden items-center relative ease-in-out delay-100`}
          >
            <div className="absolute top-0 inset-0 bg-black/80 backdrop-blur-sm h-[100vh] font-mono space-y-9 w-full flex flex-col p-6">
              <Link
                to="/"
                className="flex justify-between items-center text-white hover: text-2xl w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Home />
                  </span>
                  <span>Home</span>
                </span>
              </Link>
              <Link
                to="/about"
                className="flex justify-between items-center text-white hover: text-2xl w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Info />
                  </span>
                  <span>About Me </span>
                </span>
              </Link>
              <Link
                to="/services"
                className="flex justify-between items-center text-white hover: text-2xl w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Briefcase />
                  </span>
                  <span> Services</span>
                </span>
              </Link>
              <Link
                to="/Contact Me"
                className="flex justify-between items-center text-white hover: text-2xl w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Layers />
                  </span>
                  <span> My Work</span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="flex justify-between items-center text-white hover: text-2xl w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Mail />
                  </span>
                  <span>Contact Me</span>
                </span>
              </Link>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
