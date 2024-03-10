import Container from "react-bootstrap/Container";
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
        paddingTop: "1rem",
      }}
    >
      <div className="container-md">
        <div className="d-flex flex-column flex-md-row align-items-center ">
          <Navbar href="#home" className="fs-brand fw-bold">
            &#123;
            <span className="txt-primary"> Caroline Almeida</span> &#125;
          </Navbar>
          <span className="circleBefore text-white">
            Front End Developer
          </span>
        </div>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
        />
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
