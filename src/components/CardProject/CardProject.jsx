import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import IconArrow from "../IconArrow/IconArrow";

export default function CardProject(props) {
    
  return (
    <div className="cardProject col">
      <div className="cardTop d-flex justify-content-between">
        <div className="figSvg" style={{width:'4rem', height:'4rem', color:'hsla(56, 94%, 94%, 1)'}}>
            <FaRegFolder />
        </div>
        <div className="d-flex gap-1">
            <a href={props.gitHub} target="_blank" rel="noreferrer">
                <div className="figSvg" style={{color:'hsla(56, 94%, 94%, 1)'}}>
                  <FiGithub/>
                </div>
            </a>
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="figSvg">
                  <IconArrow fillColor="hsla(56, 94%, 94%, 1)"/>
                </div>
            </a>
        </div>
      </div>
      <div className="cardInfo d-flex flex-column  justify-content-between">
        <h4>{props.name}</h4>
        <div className="d-flex flex-column justify-content-between gap-4">
            <p>{props.description}</p>
            <span className="tecnologies">
              {props.tecnologie.map(tecnologia => {
                return (
                  <span>{tecnologia}</span>
                )
              })}
            </span>
        </div>
      </div>
    </div>
  );
}
