import React from "react";
import OsmoMenu from "../../components/OsmoMenu/OsmoMenu";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/About/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import EducationSection from "../../components/EducationSection/EducationSection";
import FooterContact from "../../components/FooterContact/FooterContact";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";

export default function Landing() {
  return (
    <>
      <OsmoMenu />
      <SmoothScroll>
        <>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EducationSection />
          <FooterContact />
        </>
      </SmoothScroll>
    </>
  );
}
