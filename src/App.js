import "./css/App.css";
import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import AboutSection from "./Components/AboutSection";
import { home, socialLinks } from "./portfolioData";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AboutSection home={home} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
