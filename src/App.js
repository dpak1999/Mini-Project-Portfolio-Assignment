import "./css/App.css";
import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import AboutSection from "./Components/AboutSection";
import { data } from "./portfolioData";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AboutSection />
    </div>
  );
}

export default App;
