import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavMenu.css';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

function NavMenu() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    /* { url:'/', title: 'Home' }, */
    { url: '#projects', title: 'Projects' },
    { url: '#about', title: 'About' },
    { url: '#contacts', title: 'Contacts' }
  ]

  return (
    <Navbar expand="lg" className="navbar-dark" style={{backgroundColor:'black'}}>
      <Container>
        <Navbar.Brand href="#home">&#123; <span className='txt-primary fs-4'>caroline</span> &#125;</Navbar.Brand>
        <Hamburger className={!isOpen ? 'navbar-toggler collapsed' : 'navbar-toggler'}  toggled={isOpen} toggle={setOpen} />
          <div id="basic-navbar-nav" className={isOpen ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'}>
            <Nav className="fs-4">
              {links.map((link) => {
                return (
                  <Nav.Link href={link.url}>{link.title}</Nav.Link>
                )
              })}
            </Nav>
          </div>
      </Container>
    </Navbar>
  );
}

export default NavMenu;