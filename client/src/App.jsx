import About from "./sections/About";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg-[#0C0C0C] text-[#F0EEE8] relative">
      <Background />
      <Navbar />
      <div className=" px-6 md:px-20 relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
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
      <Footer className="relative z-10" />
    </div>
  );
}

export default App;
