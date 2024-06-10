import React from "react";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import OurMission from "../components/OurMission";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <OurMission />
      <Stats />
      <WhatWeDo />
    </>
  );
};

export default Home;
