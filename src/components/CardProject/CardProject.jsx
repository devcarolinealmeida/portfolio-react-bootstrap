import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import IconArrow from "../IconArrow/IconArrow";

export default function CardProject(props) {
  return (
    <div className="cardProject col d-flex flex-column justify-content-between position-relative ">
      <div className="cardTop d-flex justify-content-between">
        <div
          className="figSvg"
          style={{
            width: "4rem",
            height: "4rem",
            color: "hsla(56, 94%, 94%, 1)",
          }}
        >
          <FaRegFolder />
        </div>
        <div className="figSvg" style={{ color: "hsla(56, 94%, 94%, 1)" }}>
          <FiGithub />
        </div>
      </div>
      <div className="cardInfo d-flex flex-column  justify-content-between">
        <h4>{props.name}</h4>
        <div className="info d-flex flex-column justify-content-between gap-4">
          <a href={props.gitHub} className="stretched-link">
            {props.description}
          </a>
          <span className="tecnologies">
            {props.tecnologie.map((tecnologia) => {
              return <span>{tecnologia}</span>;
            })}
          </span>
        </div>
        <div
          className="figSvg"
          style={{ position: "absolute", bottom: "2rem", right: "2rem" }}
        >
          <IconArrow fillColor="hsla(56, 94%, 94%, 1)" />
        </div>
      </div>
    </div>
  );
}
