import "./Footer.css";
import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  const contacts = {
    email: "mailto:carolineitalia85@gmail.com",
    linkedin: "https://www.linkedin.com/in/devcaroline/",
    github: "https://github.com/devcarolinealmeida",
    annaBigaran: "https://annabigaran.com/",
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="footer text-dark"
      style={{ backgroundColor: "hsla(56, 94%, 94%, 1)" }}
      id="contacts"
    >
      <div className="container-lg">
        <div className="row">
          <h4 className="fs-1 text-black text-center text-md-start mb-5">
            Get in Touch
          </h4>
        </div>
        <div className="row justify-content-between gap-5">
          <div className="col-md-8 d-flex flex-column  flex-md-row gap-4">
            <a href={contacts.email} className="btn btn-outline-dark btn-lg">
              Email
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark btn-lg"
            >
              LinkedIn
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark btn-lg"
            >
              Github
            </a>
          </div>
          <div className="col d-flex justify-content-center justify-content-md-end align-self-end">
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
          <div className="col-md-8 d-flex gap-4 justify-content-center justify-content-md-start">
            <span>
              &copy;2024,{' '}
              <a href={contacts.linkedin} target="_blank" rel="noreferrer">
                Caroline Almeida
              </a>
            </span>
            <span>
              Designed by{' '}
              <a href={contacts.annaBigaran} target="_blank" rel="noreferrer">
                Anna Bigaran
              </a>
            </span>
          </div>
          <div className="col d-flex justify-content-center justify-content-md-end">
          <span>
            See the recent update on {' '}
              <a href={contacts.github} target="_blank" rel="noreferrer">
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
