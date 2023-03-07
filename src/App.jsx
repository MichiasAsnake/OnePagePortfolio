import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
