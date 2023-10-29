import {Container, Nav , Navbar} from 'react-bootstrap';
import { navLinks } from '../data';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div>
    <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>EventCampus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link)=>{
                return(
                    <div className="nav-link" key={link.id}>
                        <NavLink to={link.path}>{link.text}</NavLink> 
                    </div>
                    );
                })}
            </Nav>
          <div className='text-center'>
          <button type="button" className="btn btn-primary">Masuk</button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent;