import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Layers, Mail } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/", label: "Home", icon: <Home /> },
    { path: "/about", label: "About Us", icon: <Info /> },
    { path: "/services", label: "Our Services", icon: <Briefcase /> },
    { path: "/work", label: "Our Work", icon: <Layers /> },
    { path: "/contact", label: "Contact Us", icon: <Mail /> },
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
    <div className="sticky  top-0 z-10">
      <div className="shadow-lg hover:shadow-xl z-10 border-slate-300 border-b-[1px]  bg-white/5 backdrop-blur-lg">
        <div className=" w-full mx-0.5 px-6 py-1 sm:flex justify-between  ">
          <div className=" px-0 py-3 flex justify-between align-middle self-center ">
            <div className="">
              <Link
                to="/"
                className="text-3xl font-bold hover:text-gray-600 text-orange-500"
              >
                {/* <img src={Logo} alt="XTech" className="max-w-25 -p-2 rounded-3xl" /> */}
                XTech
              </Link>
            </div>

            <div className="sm:hidden flex items-center ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none "
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="hidden sm:block">
              <div className="sm:flex  flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 hidden whitespace-nowrap  ">
                <nav className="flex space-x-4">
                  {navLinks.map((link, index) => (
                    // <Link
                    //     key={index}
                    //     to={link.path}
                    //     className="flex text-lg items-center relative group p-2 text-gray-900"
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
                      className="flex text-lg items-center relative group p-2 text-gray-900"
                    >
                      <span className="mr-2 z-10">{link.icon}</span>

                      {/* Wrapper for text and background */}
                      <span className="relative z-10 overflow-hidden py-1 px-2 rounded-sm">
                        {/* Slanted Background (Top-Only) */}
                        <span
                          className="absolute top-0 left-0 w-full h-full bg-orange-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-0"
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
            className={`${
              isOpen ? "block" : "hidden"
            } flex sm:hidden items-center`}
          >
            <div className="flex flex-col justify-between h-full p-6 space-y-4">
              <Link
                to="/"
                className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full"
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
                className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Info />
                  </span>
                  <span>About Us</span>
                </span>
              </Link>
              <Link
                to="/services"
                className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Briefcase />
                  </span>
                  <span>Our Services</span>
                </span>
              </Link>
              <Link
                to="/work"
                className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Layers />
                  </span>
                  <span>Our Work</span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full"
              >
                <span className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6">
                    <Mail />
                  </span>
                  <span>Contact Us</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
