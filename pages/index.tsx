import React from "react";
import LandingpageLayout from "@/layouts/LandingpageLayout";
import { About, Contact, Hero, Projects } from "@/components";

const Homepage = () => {
  return (
    <LandingpageLayout pageTitle=" ">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LandingpageLayout>
  );
};

export default Homepage;
