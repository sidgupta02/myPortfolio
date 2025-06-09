import React from "react";
import profile from "../assets/image1.jpg";

const Home = () => {
  return (
    <section className="bg-gray-950 text-white py-12 px-4 md:px-24 flex flex-col md:flex-row items-center gap-12 min-h-screen relative">
      {/* Rhombus BG */}
      <div className="absolute w-[1500px] h-[200px] bg-[#0A0F1C] rotate-45 top-[30%] left-[-500px] z-0"></div>

      {/* Profile Image Frame */}
      <div className="group relative w-[280px] h-[350px] ml-0 md:ml-[126px]">
        {/* Corner Borders */}
        <div className="absolute top-3 left-3 w-24 h-24 border-l-8 border-t-8 border-green-400 rounded-tl-lg group-hover:top-0 group-hover:left-0 transition-all duration-300"></div>
        <div className="absolute top-3 right-3 w-24 h-24 border-r-8 border-t-8 border-green-400 rounded-tr-lg group-hover:top-0 group-hover:right-0 transition-all duration-300"></div>
        <div className="absolute bottom-3 left-3 w-24 h-24 border-l-8 border-b-8 border-green-400 rounded-bl-lg group-hover:bottom-0 group-hover:left-0 transition-all duration-300"></div>
        <div className="absolute bottom-3 right-3 w-24 h-24 border-r-8 border-b-8 border-green-400 rounded-br-lg group-hover:bottom-0 group-hover:right-0 transition-all duration-300"></div>

        {/* Image */}
        <div className="relative w-full h-full p-8">
          <img
            src={profile}
            alt="Siddhant Gupta"
            className="w-full h-full rounded-3xl object-cover filter blur-sm group-hover:blur-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left ml-0 md:ml-[114px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          HI, I'M <span className="text-white">SIDDHANT GUPTA</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-green-400 font-semibold mb-4">
          FULL STACK DEVELOPER
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          I'm a Full-Stack Developer with a strong passion for backend
          engineering. I specialize in building robust APIs, real-time features,
          and scalable architectures. Alongside solid frontend skills, I also
          bring an understanding of UI/UX design principles. I enjoy writing
          clean, maintainable server-side logic and love tackling challenges
          that push me to learn and grow.
        </p>
        <a
          href="https://drive.google.com/file/d/178b9srRb9ybKxY7Ccdxcpmw-WuhamY1C/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-black px-6 py-2 font-semibold rounded hover:bg-green-400 transition"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
};

export default Home;
