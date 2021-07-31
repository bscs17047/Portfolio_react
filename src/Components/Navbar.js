import React from 'react';
import {Container, Nav , Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import profilepic from "../img/abdul rehman.png"
const NavbarComp = () => {
    return (
        <div>
           <>
           <Navbar fixed='top' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home"><img src ={profilepic} alt= "pic" style={{height:35 , width:35 , borderRadius:50}}/> Abdul Rehman</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">About Me</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

 
</>
        </div>
    );
};



export default NavbarComp;