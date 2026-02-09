import Hero from "@/components/Hero";
import Advantages from "@/app/Advantages";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Aboutus from "../components/Aboutus";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import About from "@/app/About/About";
import Services from "./Services";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Advantages />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Aboutus />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
