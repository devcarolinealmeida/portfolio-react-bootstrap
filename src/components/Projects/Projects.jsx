import ProjectsTitle from "../ProjectsTitle/ProjectsTitle";
import { projectsData } from "../../data/Projects"; 
import './Projects.css';
import IconArrow from '../IconArrow/IconArrow'


function Projects() {

    return (
        <>
            <ProjectsTitle/>
            <div class="projects-container container-lg bg-black" id="projects">
                <div class="row">
                    <ol class="project-list">
                        {projectsData.map((project)=> {
                            return (
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <li class="list-group-item d-flex justify-content-between align-items-center gap-4 ">
                                        <div class="me-auto">
                                            <div class="fw-bold">{project.name}
                                                <span class="badge rounded-pill ms-2" style={{ backgroundColor: 'var(--bg-' + project.category + ')' }}>&#123; {project.category} &#125;</span>
                                            </div>
                                        </div>
                                        <div class="_img-hover">
                                            <img src={project.img} alt="" />
                                        </div>
                                        <div class="_cta">
                                            <IconArrow fillColor="transparent"/>
                                        </div>
                                    </li>
                                </a>
                            );
                        })}
                    </ol>
                </div>
            </div>
         </>
    )
}

export default Projects;