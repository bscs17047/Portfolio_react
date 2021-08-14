import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import profilepic from "../img/abdul rehman.png"
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


const NavbarComp = () => {
  return (
    <div>
      <>
        <Navbar  fixed='top' bg="dark" variant="dark" expand='md'>
          <Container>
            <Navbar.Brand class ='nav-link active' href="#home"><img src={profilepic} alt="pic" style={{ height: 35, width: 35, borderRadius: 50 }} /> Abdul Rehman</Navbar.Brand>
          <NavbarToggle/>
          <NavbarCollapse>
            <Nav className="mr-auto">
              
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

          </NavbarCollapse>
          </Container>
        </Navbar>


      </>
    </div>
  );
};



export default NavbarComp;