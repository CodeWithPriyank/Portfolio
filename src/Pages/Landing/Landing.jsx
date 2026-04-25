import React from "react";
import OsmoMenu from "../../components/OsmoMenu/OsmoMenu";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/About/AboutSection";
import ExperienceSection from "../../components/Experience/ExperienceSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
// import BlogSection from "../../components/BlogSection/BlogSection";
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
          <ExperienceSection />
          <ProjectsSection />
          {/* <BlogSection /> */}
          <FooterContact />
        </>
      </SmoothScroll>
    </>
  );
}
