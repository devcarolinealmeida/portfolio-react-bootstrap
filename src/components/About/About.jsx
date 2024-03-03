import {  motion, useScroll } from "framer-motion";
import  carolinePhoto  from "../../assets/caroline-almeida-dev.png";
import { FaAngellist } from "react-icons/fa6";
import { useRef } from "react";

function About() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["-200vh", "0vh"]}
    );
    
    const parent = {
        variantA: { opacity: 0 },
        variantB: { opacity: 1  }
    };

    const photo = {
        variantA: { width: '5rem', },
        variantB: {  width: '25rem', }
    }

    const transSpring = 'type: "spring", bounce: 0.25';


    return (
       <>
            <motion.div ref={ref}
                className="min-vh-100 d-flex align-items-center" 
                style={{ scale: scrollYProgress,
                    padding: 'clamp(1rem, 7vw, 4rem)',
                    background: 'var(--color-primary)',
               }}
               id="about"
                /* variants={parent}
                initial='variantA'
                whileInView='variantB' */
                transition={transSpring}
                >
                <div className="container-lg text-dark">

                    <div className="row row-gap-5">
                        <div 
                            className="col-12 col-lg-6"
                            >
                            <motion.h4 
                                className="d-flex flex-column  gap-4"
                            variants={parent}
                            /* transition={transSpring} */
                            transition={{
                                ease: "backIn",
                                duration: 1.2}}
                            initial='variantA'
                            whileInView='variantB'>
                                <span className="d-block fs-2 mb-4">&#123; About me &#125;</span>
                                <div>
                                    <span className="fs-4">
                                        Oi,
                                    </span>
                                    <FaAngellist />
                                </div>
                                <div className="d-flex flex-column gap-4">
                                    <span>
                                        I enjoy building new things, and my motivation at work is to develop, piece by piece, useful, beautiful, and functional elements.
                                    </span>
                                    <span>
                                        In Brazil, I worked alongside design and development teams to plan websites and digital platforms. In April 2021, I moved to Italy, and decided to change my career path to become a web developer and create my own applications
                                    </span>
                                </div>
                                
                            </motion.h4>
                        </div>
                        <div className="col-12 col-lg-6">
                            <motion.img src={carolinePhoto} alt=""
                            style={ {width:'clamp(14rem, 30vw, 25rem)'} }
                            className="float-end"
                                variants={parent}
                                /* transition={transSpring} */
                                transition={{
                                    ease: "backIn",
                                    duration: 1.2}}
                            
                            initial='variantA'
                            whileInView='variantB'
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About;