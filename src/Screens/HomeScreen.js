import React from "react";
import AboutSection from "../Components/AboutSection";
import BlogSection from "../Components/BlogSection";
import ProjectSection from "../Components/ProjectSection";
import SkillSection from "../Components/SkillSection";
import {
  home,
  socialLinks,
  about,
  skills,
  projects,
  blogs,
} from "../portfolioData";

const HomeScreen = () => {
  return (
    <>
      <AboutSection home={home} socialLinks={socialLinks} />
      <SkillSection about={about} skills={skills} />
      <ProjectSection projects={projects} />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default HomeScreen;
