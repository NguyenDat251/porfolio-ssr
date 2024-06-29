import React from "react";
import { useEffect } from "react";
// import fullpage from "fullpage.js";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer/Footer.js";
import Banner from "../sections/Banner/Banner.js";
import AboutMe from "../sections/AboutMe/AboutMe.js";
import Experience from "../sections/Experience/Experience.js";
import MyBlog from "../sections/MyBlog/MyBlog";
import MySkill from "../sections/MySkill/MySkill";
import ContactMethod from "../sections/ContactMethod/ContactMethod";
import RotateSquare from "../RotateSquare/RotateSquare";
import GlowingMouse from "../GlowingMouse/GlowingMouse";
import FadedSection from "../FadedSection/FadedSection";
import PreloadBackground from "../PreloadBackground/PreloadBackground";
import { AnchorDataList } from "../utils.js";
import "./Landing.module.scss";

const MEDIUM_SCREEN = 768;

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="vertical-scrolling">
      <div className="pt-16 md:pt-0 h-screen flex flex-col items-start justify-center">
        <FadedSection>{children}</FadedSection>
      </div>
    </section>
  );
};

export default function Landing() {
  useEffect(() => {
    // if (window && window.screen.availWidth >= MEDIUM_SCREEN)
    //   new fullpage("#fullpage", {
    //     licenseKey: "gplv3-license",
    //     sectionSelector: ".vertical-scrolling",
    //     navigation: true,
    //     parallax: true,
    //     anchors: AnchorDataList,
    //     scrollingSpeed: 500,
    //     scrollOverflow: false,
    //   });
  }, []);
  return (
    <>
      {/* <PreloadBackground /> */}
      <GlowingMouse />
      <div>
        <Navbar />
        <ContactMethod />
        <main
          id="fullpage"
          className="container px-6 md:px-20 lg:px-[200px] 2xl:px-[350px] text-[--slate] mx-auto"
        >
          <section className="vertical-scrolling">
            <RotateSquare />
            <FadedSection>
              <Banner />
            </FadedSection>
          </section>
          <SectionWrapper>
            <AboutMe />
          </SectionWrapper>
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
          <SectionWrapper>
            <MyBlog />
          </SectionWrapper>
          <SectionWrapper>
            <MySkill />
          </SectionWrapper>

          <section className="vertical-scrolling pb-24">
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}
