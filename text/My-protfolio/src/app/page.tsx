"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Heor from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import About from "@/components/About";
import Contact from "@/components/Contact";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay: 100,
      mirror : true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  } , []);
  return (
          <main>
            <Hero/>
            <Projects/>
            <Skills/>
            <Contact/>
            <About/>
          </main>
  );
}
