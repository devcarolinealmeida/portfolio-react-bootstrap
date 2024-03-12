import "./Footer.css";
import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  const contacts = {
    email: "mailto:carolineitalia85@gmail.com",
    linkedin: "https://www.linkedin.com/in/devcaroline/",
    github: "https://github.com/devcarolinealmeida",
    annaBigaran: "https://annabigaran.com/",
    resume: 'https://read.cv/carolinealmeida'
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="footer bg-black position-relative"
      id="contacts"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h4
              className="text-center text-md-start mb-5"
              style={{
                fontSize: "clamp(3.25rem, 2.8039rem + 1.8301vw, 5rem)",
                fontWeight: "600",
                lineHeight:'100%'
              }}
            >
              Let's build<br></br>together
            </h4>
          </div>
        </div>
        <div className="row justify-content-between gap-5">
          <div className="col-12 col-lg-8 d-flex flex-column  flex-md-row gap-4 px-5 px-md-0">
            <a href={contacts.email} className="btn btn-outline-light btn-lg">
              Email
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              LinkedIn
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Github
            </a>
            <a
              href={contacts.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Resume
            </a>
          </div>
          <div className="col-12 col-lg-2 d-flex justify-content-center justify-content-md-end align-self-end">
            <span
              className="d-block"
              style={{ cursor: "pointer" }}
              onClick={handleScrollToTop}
            >
              Back to top <FaArrowUp />
            </span>
          </div>
        </div>
        <div className="row border-top border-dark pt-4 gap-2">
          <div className="col-md-8 d-flex flex-column flex-md-row flex-wrap column-gap-4 row-gap-2 align-content-center align-content-lg-start">
            <span>
              &copy;2024,{" "}
              <a href={contacts.linkedin} target="_blank" rel="noreferrer">
                Caroline Almeida
              </a>
            </span>
            <span>
              Designed by{" "}
              <a href={contacts.annaBigaran} target="_blank" rel="noreferrer">
                Anna Bigaran
              </a>
            </span>
          </div>
          <div className="col d-flex justify-content-center justify-content-md-end">
            <span>
              See the recent update on{" "}
              <a href='https://github.com/devcarolinealmeida/portfolio-react-bootstrap' target="_blank" rel="noreferrer">
                GitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
