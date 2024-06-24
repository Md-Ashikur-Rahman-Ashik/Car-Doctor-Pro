import React from "react";
import Banner from "./Banner";
import About from "./About";

const HomePage = () => {
  return (
    <div className="container rounded-xl mx-auto">
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default HomePage;
