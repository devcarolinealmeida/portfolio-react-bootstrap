import {  motion } from "framer-motion";
import  carolinePhoto  from "../../assets/caroline-almeida-dev.png";

function About() {
    const parent = {
        variantA: { width: '30%', opacity: 0 },
        variantB: { width: '100%', opacity: 1 },
    };

    const child = {
        variantA: { transform: 'translateY(50%)', opacity: 0 },
        variantB: { transform: 'translateY(0)', opacity: 1 }
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
                    transition: 'all 800ms ease-out',
               }}
                variants={parent}
                initial='variantA'
                whileInView='variantB'
                >
                <div className="row" >
                    <div 
                        className="col-6"
                        >
                        <motion.h4 
                            className=""
                            style={{
                            transition: 'all 800ms ease-out',
                       }}
                        variants={child}
                        /* transition={{
                           type: '',
                           damping: 4,
                           mass: 0.2,
                           stiffness: 150, 
                        }} */
                        initial='variantA'
                        whileInView='variantB'>
                            <span className="d-block fs-4 mb-4">&#123; About me &#125;</span>
                            <span className="fs-5">
                                Oi,
                            </span>
                            <span> icone</span>
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
                        style={{
                            transition: 'all 800ms ease-out', }} 
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