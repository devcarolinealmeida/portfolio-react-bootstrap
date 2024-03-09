import React, { useRef } from "react";
import Works from "../Works/Works";

import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxWrap.css";
import NavMenu from "../NavMenu/NavMenu";
import Initial from "../Initial/Initial";
import About from "../About/About";

export default function ParallaxWrap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const yBlur = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -200]);

  return (
    <div
      className="_container"
      style={{
        border: "1px solid yellow",
        position: "relative",
        minHeight: "120rem",
      }}
    >
      <motion.div /* className={"_parallaxWrapper"}  */
        className="_motion-div-1"
        ref={ref}
        style={{
          border: "1px solid red",
          translateY: yBlur,
          backgroundColor: "transparent",
          position: "absolute",
          width: "100%",
          top: "0",
          height: "100%",
        }}
      >
        <div
          className="_bg-Blur"
          style={{
            border: "1px solid purple",
            width: "100%",
            minHeight: "100vh",
          }}
        ></div>
        <motion.div
          className="_container-nav-projects"
          style={{
            border: "1px solid green",
            translateY: y,
            position: "absolute",
            background: "black",
            width: "100%",
            minHeight: "100%",
          }}
        >
          <NavMenu />
          <Works />
        </motion.div>
      </motion.div>
    </div>
  );
}
