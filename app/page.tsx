import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
