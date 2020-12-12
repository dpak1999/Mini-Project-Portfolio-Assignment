import React from "react";
import AboutSection from "../Components/AboutSection";
import BlogSection from "../Components/BlogSection";
import ProjectSection from "../Components/ProjectSection";
import SkillSection from "../Components/SkillSection";

const HomeScreen = () => {
  return (
    <>
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
    </>
  );
};

export default HomeScreen;
