import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavMenu.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function NavMenu() {
  const [isOpen, setOpen] = useState(false);

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
      <div className="container-lg">
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
        <div
          id="basic-navbar-nav"
          className={
            isOpen
              ? "nabMobile navbar-collapse collapse show"
              : "navbar-collapse collapse justify-content-end"
          }
        >
          <Nav className="fs-brand gap-3">
            {links.map((link) => {
              return <Nav.Link href={link.url}>{link.title}</Nav.Link>;
            })}
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default NavMenu;
