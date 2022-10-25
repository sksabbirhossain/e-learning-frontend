import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaSun , FaMoon} from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState(false)
    return (
        <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><NavLink to="/" end>Courses</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/faq" >FAQ</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/blog" >Blog</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/login" >Login</NavLink></Nav.Link>
            <Nav.Link >
                <p onClick={() => setTheme(!theme)}>{ theme ? <><FaMoon /> <small>Dark</small> </>: <><FaSun /> <small>Light</small> </> }</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;