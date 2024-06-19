import React from "react";
import Hero from "./hero/Hero";
import About from "@/components/home/About";
import Analytics from "@/components/home/Analytics";
import Activities from "./activities/Activities";
import SandAndFun from "./SandAndFun";
const HomePage = ({ arabic }) => {
  return (
    <>
      <Hero arabic={arabic} />
      <Analytics arabic={arabic} />
      <About arabic={arabic} />
      <Activities arabic={arabic} />
      <SandAndFun arabic={arabic} />
    </>
  );
};

export default HomePage;
