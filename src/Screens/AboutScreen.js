import React from "react";
import AboutSection from "../Components/AboutSection";
import SkillSection from "../Components/SkillSection";
import { home, socialLinks, about, skills } from "../portfolioData";
const AboutScreen = () => {
  return (
    <div>
      <AboutSection home={home} socialLinks={socialLinks} />
      <SkillSection about={about} skills={skills} />
    </div>
  );
};

export default AboutScreen;
