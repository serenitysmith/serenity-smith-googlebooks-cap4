import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import AppLogin from "../AppLogin";
import AppWelcome from "../AppWelcome";

import BookTok from "../../assets/images/BookTok2.png";

import "./style.css";

const AppNavbar = () => {
  return (
    <div>
      <Navbar className="App-navbar" expand="lg" sticky="top" id="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="App-navbar-brand" src={BookTok} alt="bt" />
            </Navbar.Brand>
          </LinkContainer>
          <div className="me-auto">
            <AppWelcome />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="App-navbar-links ms-auto">
              <LinkContainer to="/library">
                <Nav.Link className="App-navbar-txt">
                  Your BookTok Corner
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/community">
                <Nav.Link className="App-navbar-txt">
                  Chat with the Community
                </Nav.Link>
              </LinkContainer>
<LinkContainer to="/search">
                <Nav.Link className="App-navbar-txt">Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="App-navbar-txt">Contact us</Nav.Link>
              </LinkContainer>
              <AppLogin />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
