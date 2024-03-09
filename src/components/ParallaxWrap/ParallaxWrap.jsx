import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import Works from "../Works/Works";
import OtherProjects from '../OthersProjects/OtherProjects';
import About from '../About/About';
import Footer from '../Footer/Footer';
import "./ParallaxWrap.css";

export default function ParallaxWrap() {
  return (
    <div className="_parallaxWrap">
      <div
        className="_bg-Blur"
        style={{
          width: "100%",
          minHeight: "100vh",
        }}
      ></div>
      <div
        className="_containerPags"
        style={{
          background: "black",
          width: "100%",
          minHeight: "100%",
        }}
      >
        <NavMenu />
        <Works />
        <OtherProjects />
        <About />
        <Footer />
      </div>
    </div>
  );
}
