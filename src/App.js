import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";

import { socialLinks } from "./portfolioData";

function App() {
  return (
    <Router>
      <Route path="/" component={NavbarComponent} />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/">
        <Footer socialLinks={socialLinks} />
      </Route>
    </Router>
  );
}

export default App;
