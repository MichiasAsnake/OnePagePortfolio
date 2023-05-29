import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Navigation />
      <Landing />
      <AboutMe />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
