import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Component/Firebase/Firebase.init';



const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  

  const logout = () => {
    signOut(auth);
  };

    return (
        <div>
          
         <div className='fixed-top'>
         <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/home">দৃশ্যায়ন - Drrissayon</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/packages">Packages</Nav.Link>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
          {
            (user?.email)? <Nav.Link onClick={logout} href="/login">Logout</Nav.Link>:
            <Nav.Link href="/login">Login</Nav.Link>
          }
          
        </Nav>
        </Container>
      </Navbar>
         </div>
          
        </div>
    );
};

export default Header;