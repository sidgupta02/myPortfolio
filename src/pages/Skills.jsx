import React, { useState } from "react";
import {
  SiCplusplus, SiC, SiJavascript, SiPython, SiHtml5,
  SiCss3, SiReact, SiTailwindcss, SiEjs, SiFastapi,
  SiNodedotjs, SiExpress, SiMongodb
} from "react-icons/si";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 200;

  const skills = [
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-400" },
    { name: "C", icon: <SiC />, color: "text-blue-300" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Python", icon: <SiPython />, color: "text-blue-200" },
    { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "EJS", icon: <SiEjs />, color: "text-pink-400" },
    { name: "FastAPI", icon: <SiFastapi />, color: "text-green-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-300" },
  ];

return (
  <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
    {/* Heading */}
    <h1 className="text-green-400 text-4xl font-bold text-center pt-10 mb-12 tracking-widest">
      MY SKILLS
    </h1>

    {/* Wrapper to position central circle + bubbles */}
    <div className="relative w-full flex justify-center items-center flex-1">
      {/* Skill Bubbles */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * (2 * Math.PI);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={skill.name}
            title={skill.name}
            className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black
              flex items-center justify-center font-bold text-xl transition-all duration-500 ease-out
              cursor-help shadow-md hover:scale-110 hover:shadow-xl ${skill.color}`}
            style={{
              left: "50%",
              top: "50%",
              transform: isHovered
                ? `translate(${x}px, ${y}px)`
                : `translate(-50%, -50%)`,
              opacity: isHovered ? 1 : 0,
              transitionDelay: `${index * 50}ms`,
              zIndex: 10
            }}
          >
            {skill.icon}
          </div>
        );
      })}

      {/* Central Circle */}
      <div
        className="absolute w-48 h-48 rounded-full bg-black border-4 border-green-400
          flex items-center justify-center cursor-pointer transition-all duration-500 shadow-2xl z-20"
        style={{
          boxShadow: isHovered
            ? "0 0 80px rgba(34, 197, 94, 0.8), 0 0 120px rgba(34, 197, 94, 0.4)"
            : "0 0 40px rgba(34, 197, 94, 0.6)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center">
          <h2 className="text-sm font-semibold text-gray-300 mb-1">MY TECH</h2>
          <h1 className="text-2xl font-bold text-white">SKILLS</h1>
        </div>

        {/* Glow Ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle, transparent 60%, rgba(34, 197, 94, ${
              isHovered ? "0.3" : "0.1"
            }) 70%, transparent 80%)`
          }}
        ></div>
      </div>

      {/* Background Glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%)"
        }}
      ></div>
    </div>
  </section>
);
};

export default Skills;
