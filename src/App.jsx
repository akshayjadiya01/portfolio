import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import { profiles } from "./data/profile";

export default function App() {
  // 🔁 Global role state
  const [role, setRole] = useState("mlEngineer");

  // Current active profile
  const profile = profiles[role];

  return (
    <>
      <Navbar />


      {/* Dynamic Sections */}
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects profile={profile} />
      <Skills profile={profile} />
      <Contact />
      <Footer />
    </>
  );
}
