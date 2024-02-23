import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavMenu.css';
/* import Hamburger from 'hamburger-react'; */
import { useState } from 'react';

function NavMenu() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Navbar expand="lg" className="navbar-dark bg-nav">
      <Container>
        <Navbar.Brand href="#home">&#123; <span className='txt-primary'>caroline</span> &#125;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Hamburger className="navbar-toggler" toggled={isOpen} toggle={setOpen} /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;