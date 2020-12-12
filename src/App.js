import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import BlogScreen from "./Screens/BlogScreen";

import { socialLinks } from "./portfolioData";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/about" exact component={AboutScreen} />
      <Route path="/blog" exact component={BlogScreen} />
      <Footer socialLinks={socialLinks} />
    </Router>
  );
}

export default App;
