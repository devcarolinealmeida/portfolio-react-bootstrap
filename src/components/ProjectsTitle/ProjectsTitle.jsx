import {  motion, useScroll, useTransform } from "framer-motion";

function ProjectsTitle() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className="container-fluid d-flex py-5 overflow-auto ">
            
            <motion.div className="flex-grow-0  flex-shrink-0 overflow-auto transitionText" style={{ x }}
            > 
            <h4 className="fs-huge">&#123; Projects &#125; &#123; Projects &#125; &#123; Projects &#125; &#123;</h4>
            </motion.div>
            
        </div>
    )
}

export default ProjectsTitle;