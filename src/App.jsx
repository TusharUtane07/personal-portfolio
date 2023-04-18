import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default App;
