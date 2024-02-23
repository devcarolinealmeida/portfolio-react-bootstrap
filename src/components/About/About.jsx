import {  motion } from "framer-motion";
import  carolinePhoto  from "../../assets/caroline-almeida-dev.png";
import { FaAngellist } from "react-icons/fa6";

function About() {
    const parent = {
        variantA: { transform: 'scale(0.2)' },
        variantB: { transform: 'scale(1)',  }
    };

    const child = {
        variantA: { opacity: 0 },
        variantB: { opacity: 1 }
    }

    const photo = {
        variantA: { width: '5rem', },
        variantB: {  width: '25rem', }
    }


    return (
       <>
            <motion.div 
                className="container-fluid text-dark overflow-auto min-vh-100" 
                style={{
                    padding: '4rem',
                    background: 'var(--color-primary)',
               }}
               id="about"
                variants={parent}
                initial='variantA'
                whileInView='variantB'
                transition={{ type: "spring", bounce: 0.25 }}
                >
                <div className="row" >
                    <div 
                        className="col-6"
                        >
                        <motion.h4 
                            className=""
                        variants={child}
                        transition={{ type: "spring", bounce: 0.25 }}
                        initial='variantA'
                        whileInView='variantB'>
                            <span className="d-block fs-4 mb-4">&#123; About me &#125;</span>
                            <span className="fs-5">
                                Oi,
                            </span>
                            <FaAngellist />
                            <span className="d-block fs-5">
                                I enjoy building new things, and my motivation at work is to develop, piece by piece, useful, beautiful, and functional elements.
                                <br></br><br></br>
                                In Brazil, I worked alongside design and development teams to plan websites and digital platforms. In April 2021, I moved to Italy, and decided to change my career path to become a web developer and create my own applications
                            </span>
                        </motion.h4>
                    </div>
                    <div className="col-6">
                        <motion.img src={carolinePhoto} alt=""
                        className="float-end"
                            variants={photo}
                         transition={{
                           type: '',
                           damping: 4,
                           mass: 0.2,
                           stiffness: 150, 
                        }} 
                        initial='variantA'
                        whileInView='variantB'
                        />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About;