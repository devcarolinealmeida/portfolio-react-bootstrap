import TitleScroll from "../TitleScroll/TitleScroll";
import { projectsData } from "../../data/Projects"; 
import './Projects.css';
import IconArrow from '../IconArrow/IconArrow'


function Projects() {

    return (
        <>
            <TitleScroll title='Projects'/>
            <div className="projects-container container bg-black">
                <div className="row">
                    <ol className="project-list fs-3">
                        {projectsData.map((project)=> {
                            return (
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <li className="list-group-item d-flex justify-content-between align-items-center gap-4 ">
                                        <div className="_title me-auto d-flex flex-wrap align-items-center">
                                            <div className="fw-bold">{project.name}
                                            </div>
                                                <span className="badge rounded-pill ms-2" style={{ backgroundColor: 'var(--bg-' + project.category + ')' }}>&#123; {project.category} &#125;</span>
                                        </div>
                                        <div className="_img-hover">
                                            <img src={project.img} alt="" />
                                        </div>
                                        <div className="_cta">
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