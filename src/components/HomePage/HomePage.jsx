import React from "react";
import Banner from "./Banner";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="container rounded-xl mx-auto">
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default HomePage;
