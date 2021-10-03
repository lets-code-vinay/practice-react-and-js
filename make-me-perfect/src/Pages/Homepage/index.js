import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import About from "../About";

const Homepage = () => {
  return (
    <>
      {/* <!-- header --> */}
      <div id="home" className="header">
        <div className="container">
          {/* <!-- top-hedader --> */}
          <div className="top-header">
            <Navbar />
            <Banner />
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Homepage;
