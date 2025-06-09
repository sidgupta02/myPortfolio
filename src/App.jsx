import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;