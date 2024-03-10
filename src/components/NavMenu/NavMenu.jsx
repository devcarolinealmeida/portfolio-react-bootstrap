import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavMenu.css";
import Hamburger from "hamburger-react";
import { useState, useRef } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

function NavMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const useClickClose = (ref, () => setOpen(false));

  const links = [
    { url: "#works", title: "Works" },
    { url: "#about", title: "About" },
    { url: "#contacts", title: "Get in touch" },
  ];

  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      sticky="top"
      style={{
        backgroundColor: "black",
      }}
    >
      <motion.div
      ref={ref}
        className="container-lg"
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="d-flex flex-column flex-md-row align-items-md-center">
          <Navbar href="#home" className="fs-brand fw-bold">
            &#123;
            <span className="txt-primary"> Caroline Almeida</span> &#125;
          </Navbar>
          <span className="circleBefore fs-sm text-white">
            Front End Developer
          </span>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="basic-navbar-nav"
              className="navMobile navbar-collapse collapse show"
              initial={{ transform: "translateX(-100%)" }}
              animate={{ transform: "translateX(0)"}}
              exit={{ opacity: 1, transform: "translateX(-100%)" }}
              transition={{ duration: 0.2 }}
            >
              <Nav className="fs-brand gap-3">
                {links.map((link) => {
                  return <Nav.Link onClick={useClickClose} href={link.url}>{link.title}</Nav.Link>;
                })}
              </Nav>
              <div className="fs-3 fw-bold mt-5">
                &#123;
                <span className="txt-primary"> Caroline Almeida</span> &#125;
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          id="basic-navbar-nav"
          className="navbar-collapse collapse justify-content-end"
        >
          <Nav className="fs-brand gap-3">
            {links.map((link) => {
              return <Nav.Link href={link.url}>{link.title}</Nav.Link>;
            })}
          </Nav>
        </div>
      </motion.div>
    </Navbar>
  );
}

export default NavMenu;
