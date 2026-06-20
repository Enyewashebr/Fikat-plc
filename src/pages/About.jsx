import MainLayout from "../layouts/MainLayout";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import WhatWeSupply from "../components/about/WhatWeSupply";
import MissionVision from "../components/about/MissionVision";
import WhyChooseFikat from "../components/about/WhyChooseFikat";
import CoreValues from "../components/about/CoreValues";
import ContactCTA from "../components/ContactCTA";

const About = () => {
  return (
    <MainLayout>


      <AboutHero />

      <WhoWeAre />

      <WhatWeSupply />

      <MissionVision />

      <WhyChooseFikat />

      <CoreValues />

      <ContactCTA />

  

    </MainLayout>
  );
};

export default About;
