import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";



import BookTok from "../../assets/images/BookTok2.png";

import "./style.css";

const AppNavbar = () => {
  return (
    <div>
      <Navbar className="App-navbar" expand="lg" sticky="top" id="navbar">
       
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="App-navbar-brand" src={BookTok} alt="bt" />
            </Navbar.Brand>
          </LinkContainer>
          <div className="me-auto">
         
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

              <LinkContainer to="/dashboard">
                <Nav.Link className="App-navbar-txt"> Your Profile</Nav.Link>
              </LinkContainer>


              <LinkContainer to="/contact">
                <Nav.Link className="App-navbar-txt">Contact us</Nav.Link>
              </LinkContainer>
             
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default AppNavbar;
