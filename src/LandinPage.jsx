import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";
import Connect from "./Connect";
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Connect />
      <Footer />
    </>
  );
}

export default LandingPage;