import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const { currentUser, logOut } = useAuth();

  return (
    <Navbar expand="lg" className="main-header">
      <Container>
        <Navbar>
          <div className=" logo-area">
            <div className="pe-2 logo">
              <img src={logo} alt="" />
            </div>
            <div className="logo-text d-flex flex-column  justify-content-start">
              <p>E-Learning</p>
              <small>for build your knowlage</small>
            </div>
          </div>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink to="/" end>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/courses" end>
                Courses
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/faq">FAQ</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog">Blog</NavLink>
            </Nav.Link>
            <Nav.Link>
              {currentUser ? (
                <>
                  <span className="me-2" onClick={logOut}>
                    LogOut
                  </span>
                  <Tippy content={currentUser && currentUser.displayName}>
                    <img
                      src={
                        currentUser.photoURL === null
                          ? "https://freesvg.org/img/abstract-user-flat-4.png"
                          : currentUser.photoURL
                      }
                      alt=""
                      className="user-logo"
                    />
                  </Tippy>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                </>
              )}
            </Nav.Link>
            <Nav.Link>
              <span onClick={() => setTheme(!theme)}>
                {theme ? (
                  <>
                    <FaMoon /> <small>Dark</small>{" "}
                  </>
                ) : (
                  <>
                    <FaSun /> <small>Light</small>{" "}
                  </>
                )}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
