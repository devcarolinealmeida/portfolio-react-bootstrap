import ProjectsTitle from "../ProjectsTitle/ProjectsTitle";
import { projectsData } from "../../data/Projects"; 
import './Projects.css';


function Projects() {

    return (
        <>
            <ProjectsTitle/>
            <div class="container bg-black" id="projects">
                <div class="row">
                    <ol class="_project-list">
                        {projectsData.map((project,i)=> (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <li class="list-group-item d-flex justify-content-between align-items-center gap-4 ">
                                    <div class="me-auto">
                                        <div class="fw-bold">{project.name}
                                            <span class="badge bg-secondary rounded-pill ms-2">{project.category}</span>
                                        </div>
                                    </div>
                                    <div class="_img-hover">
                                        <img src={project.img} alt="" />
                                    </div>
                                    <div class="_cta">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 100 60" fill="none">
                                        <rect x="1" y="1" width="98" height="58" rx="29" stroke="#FEFCE1" stroke-width="2"/>
                                        <path d="M56 19L67 30L56 41" stroke="#FEFCE1" stroke-width="2.5"/>
                                        <path d="M67 30H33" stroke="#FEFCE1" stroke-width="2.5"/>
                                        </svg>
                                    </div>
                                </li>
                            </a>

                        ))}
                    </ol>
                </div>
            </div>
         </>
    )
}

export default Projects;