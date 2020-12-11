import "./css/App.css";
import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import AboutSection from "./Components/AboutSection";
import SkillSection from "./Components/SkillSection";
import ProjectSection from "./Components/ProjectSection";
import BlogSection from "./Components/BlogSection";
import Footer from "./Components/Footer";

import {
  home,
  socialLinks,
  about,
  skills,
  projects,
  blogs,
} from "./portfolioData";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AboutSection home={home} socialLinks={socialLinks} />
      <SkillSection about={about} skills={skills} />
      <ProjectSection projects={projects} />
      <BlogSection blogs={blogs} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
