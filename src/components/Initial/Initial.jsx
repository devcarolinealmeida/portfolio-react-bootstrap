import React from "react";
import Typed from "../Typed/Typed";
import ScrollWrap from "../ScrollWrap/ScrollWrap";
import { PiCoffee } from "react-icons/pi"

export default function Initial() {
  return (
    <div
      className="container-fluid d-flex align-items-center min-vh-100"
      style={{ background: "var(--darkGreen)" }}
    >
      <div className="container d-flex flex-column justify-content-between" style={{minHeight: '90vh'}}>
        <div className="row justify-content-between align-items-lg-center">
          <div className="col col-lg-3 fw-bold" style={{fontSize: 'clamp(1rem, 0.9044rem + 0.3922vw, 1.375rem)'}}>
            &#123; <span className="txt-primary">Caroline Almeida</span> &#125;
          </div>
          <div className="col col-lg-7 d-flex flex-column flex-md-row justify-content-md-between align-items-end fs-sm">
              <span className="d-flex gap-2">Coffee Lover<span className="d-none d-md-inline">
                <PiCoffee className="fs-4"/>
              </span></span>
              <span>Mountain Biker</span>
            
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="fs-h1 lh-1">
              Front End
              <div className="d-flex flex-column flex-md-row gap-0 gap-md-4 lh-80">
                Developer
                <div className="mt-2">
                  <Typed
                    fs={"fs-1"}
                    styles={{ color: "var(--color-primary)" }}
                  />
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="row justify-content-md-end">
          <div className="col-lg-6 align-self-end">
          <p className="lh-13" style={{fontSize: 'clamp(1rem, 0.6814rem + 1.3072vw, 2.25rem)'}}>I'm Caroline, Front End Developer dedicated to crafting immersive digital experiences. Currently living in Turin, Italy.</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center justify-content-md-start ">
            <ScrollWrap/>
          </div>
        </div>
      </div>
    </div>
  );
}
