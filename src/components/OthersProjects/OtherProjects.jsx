import React from "react";
import { otherProjects } from "../../data/OtherProjects";
import CardProject from "../CardProject/CardProject";
import "./OtherProjects.css";

function OtherProjects() {

  return (
    <div className="_otherProjects position-relative bg-black">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4
              style={{
                fontSize: "clamp(1.875rem, 1.0784rem + 3.268vw, 5rem)",
                fontWeight: "600",
                marginBottom: "6rem",
                lineHeight: "90%",
              }}
            >
              Other noteworthy <br></br>projects
            </h4>
          </div>
        </div>
        <div className="scrollWrap row">
          <div>
            {otherProjects.map((project) => {
              return (
                <CardProject
                  name={project.name}
                  description={project.description}
                  tecnologie={project.tecnologie}
                  gitHub={project.gitHub}
                  link={project.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProjects;
