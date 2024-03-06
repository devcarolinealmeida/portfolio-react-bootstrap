import {  motion, useScroll, useTransform } from "framer-motion";

function TitleScroll(props) {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className="container-fluid d-flex pb-5 overflow-auto" style={{ paddingTop:'6rem'}}>
            
            <motion.div className="flex-grow-0  flex-shrink-0 overflow-auto transitionText" style={{ x }}
            > 
            <h4 className="fs-huge txt-primary">&#123; {props.title} &#125; &#123; {props.title} &#125; &#123; Projects &#125; &#123;</h4>
            </motion.div>
            
        </div>
    )
}

export default TitleScroll;