import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">দৃশ্যায়ন - Drrissayon</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link href="#packages">Packages</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;