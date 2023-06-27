import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </main>
  );
}