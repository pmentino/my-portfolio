import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default App;
