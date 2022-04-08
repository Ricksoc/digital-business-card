import React from "react";
import Personal from "./Personal";
import About from "./About";
import Interests from "./Interests";

function Content() {
  return (
    <div className="container">
      <Personal />
      <About />
      <Interests />
    </div>
  );
}

export default Content;
