import React from "react";
import Typed from "../Typed/Typed";
import ScrollWrap from "../ScrollWrap/ScrollWrap";
import { PiCoffee } from "react-icons/pi";
import "./Initial.css";
import { motion } from "framer-motion";

export default function Initial() {
  return (
    <div
      className="initialContainer"
      style={{
        background: "var(--darkGreen)",
        position: "sticky",
        top: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container d-flex flex-column justify-content-md-between  min-vh-100 py-4">
        <motion.div 
        className="row justify-content-between align-items-lg-center"
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.2 }}>
          <div className="col col-lg-3">
            &#123; <h1 className="fs-brand fw-bold txt-primary d-inline">Caroline Almeida</h1> &#125;
          </div>
          <div className="col col-lg-7 d-flex flex-column flex-md-row justify-content-md-between align-items-end fs-sm">
            <span className="d-flex gap-2">
              Coffee Lover
              <span className="d-none d-md-inline">
                <PiCoffee className="fs-4" />
              </span>
            </span>
            <span>Mountain Biker</span>
          </div>
        </motion.div>
        <motion.div 
        className="row"
        initial={{ opacity: 0, transform: "translateX(-10%)" }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.7, delay:0.2 }}
        >
          <div className="col">
            <h2 className="fs-h1 mb-0" style={{lineHeight: '75%'}}>Front End</h2>
            <div className="d-flex flex-column flex-md-row gap-0 gap-md-4 lh-80">
              <h3 className="fs-h1 lh-1">Developer</h3>
              <div className="mt-3">
                <Typed
                  fs={"fs-1"}
                  styles={{ color: "var(--color-primary)" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        className="row justify-content-md-end"
        initial={{ opacity: 0, transform: "translateX(-10%)" }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.7, delay:0.2 }}
        >
          <div className="col-lg-6 align-self-end">
            <h3
              className="lh-13"
              style={{
                fontSize: "clamp(1.375rem, 1.152rem + 0.915vw, 2.25rem)",
                lineHeight: "130%",
                fontWeight: '100'
              }}
            >
              I'm Caroline, Front End Developer dedicated to crafting immersive
              digital experiences. Currently living in Turin, Italy.
            </h3>
          </div>
        </motion.div>
        <div className="row">
          <div className="col d-flex justify-content-center justify-content-md-start ">
            <ScrollWrap />
          </div>
        </div>
      </div>
    </div>
  );
}
