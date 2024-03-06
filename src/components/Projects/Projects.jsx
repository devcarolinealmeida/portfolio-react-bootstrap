import TitleScroll from "../TitleScroll/TitleScroll";
import { projectsData } from "../../data/Projects"; 
import './Projects.css';
import Project from "../Project/Project";


function Projects() {

    return (
        <>
            <TitleScroll title='Works'/>
            <div className="projects-container container bg-black">
                <div className="row">
                    {projectsData.map((project)=> {
                        return (
                            <Project link={project.link} title={project.name} category={project.category}/>
                        );
                    })}
                </div>
            </div>
         </>
    )
}

export default Projects;