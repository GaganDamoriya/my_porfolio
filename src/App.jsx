import { useState } from "react";

import "./App.css";
import DashBoard from "./components/dashBoard/DashBoard";
import Navbar from "./components/navbar/Navbar";
import TechStack from "./components/techStack/TechStack";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <DashBoard />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
