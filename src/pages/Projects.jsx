import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

// Card Component
const ProjectCard = ({ img, title, github, live }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-2 space-x-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const Projects = () => {
  const projectList = [
    {
      img: img1,
      title: "Fitness Tracker App",
      github: "https://github.com/your/fitness-tracker",
      live: "https://fitness.live",
    },
    {
      img: img2,
      title: "Podcast Recording Tool",
      github: "https://github.com/your/podcast",
      live: "https://podcast.live",
    },
    {
      img: img3,
      title: "Notion Clone",
      github: "https://github.com/your/notion",
      live: "https://notion.live",
    },
    {
      img: img4,
      title: "Shopping UI",
      github: "https://github.com/your/shop-ui",
      live: "https://shop.live",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen w-full py-12 px-4">
      {/* Heading */}
      <h1 className="text-green-400 text-4xl font-bold text-center mb-10">
        MY PROJECTS
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
