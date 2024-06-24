import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="container rounded-xl mx-auto">
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default HomePage;
