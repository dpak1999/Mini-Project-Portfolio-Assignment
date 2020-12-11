import "./css/App.css";
import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import AboutSection from "./Components/AboutSection";
import SkillSection from "./Components/SkillSection";

import { home, socialLinks, about, skills } from "./portfolioData";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AboutSection home={home} socialLinks={socialLinks} />
      <SkillSection about={about} skills={skills} />
    </div>
  );
}

export default App;
