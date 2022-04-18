import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Component/Firebase/Firebase.init';




const Header = () => {
  const [user, loading, error] = useAuthState(auth);
console.log(user);  

if (loading) {
  return;
}

  const logout = () => {
    signOut(auth);
  };

    return (
        
          
         <div className='fixed-top'>
         

      <Navbar bg="primary" variant="dark" expand="lg">
  <Container fluid>
  <Navbar.Brand href="/home">দৃশ্যায়ন - Drrissayon</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/about">About me</Nav.Link>
          <Nav.Link href="/packages">Packages</Nav.Link>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
          {
            (user?.email)? <Nav.Link onClick={logout} href="/login">Logout</Nav.Link>:
            <Nav.Link href="/login">Login</Nav.Link>
          }
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
         </div>
          
      
    );
};

export default Header;