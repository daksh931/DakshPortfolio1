import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import it from "../assets/img/design.png";
import recotech from '../assets/img/ProjectRecotech/Login.png';
import MusicSchool from '../assets/img/ProjectMusicSchool/Home.png';
import signoracucina from '../assets/img/ProjectSignoracucina/Home.png';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const projects = [
  {
    id: "recotech",
    name: "Recotech.co",
    image: recotech,
  },
  {
    id: "music-school",
    name: "Music School",
    image: MusicSchool,
  },
  {
    id: "signoracucina",
    name: "signoracucina-az",
    image: signoracucina,
  },
  {
    id: "slabpro",
    name: "Slab Pro",
    image: it,
  },
  {
    id: "visionClasses",
    name: "vision Classes",
    image: it,
  },
];

export default function OurWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8 group">
        <h2 className="text-4xl font-bold text-[#147DD2]/70 group-hover:text-[#147DD2]/92 transition-colors delay-75 duration-300 text-center  cursor-pointer ">Projects</h2>
        <h1 className="text-xl font-semibold text-zinc-300 mt-4 cursor-pointer group-hover:text-white transition-colors delay-125 duration-400">
          Projects Handled Carefully and  submitted to Clients successfully.
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  space-y-2.5 space-x-6.5 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-3.5 mt-5">

    <motion.div
      whileHover={{ scale: 1.006, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-xl overflow-hidden border-none transition duration-500 bg-black/90 text-white"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="p-2 shadow-cyan-900 shadow-lg ">
      <div id="image div " className="h-64 overflow-hidden  ">
      <img
        src={project.image}
        alt={project.name}
        className=" object-center rounded-t-xl"
        />
        </div>
        <div className="mt-2 mx-[1px]  "></div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-[#91A810]/80 hover:text-[#91A810] transition-colors delay-75 duration-200 group">{project.name}</h2>
        <p className="text-zinc-300 group-hover:text-white text-sm mt-3 transition-colors delay-75 duration-200">Recotech is a multi-role management system designed to streamline operations across different user roles, including SUPER_ADMIN, ADMIN</p>
      </div>
      <div id="know more" className="w-full flex justify-end pb-1 pr-1 text-white font-mono">
        <div className=" flex space-x-1.5 text-lg items-center">
              <FaArrowUpRightFromSquare />
          
        </div>
      </div>
        </div>
    </motion.div>
    </div>

  );
}
