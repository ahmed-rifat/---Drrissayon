import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'

const Checkout = () => {
    const checkoutSubmit=(e)=>{
         alert('thank you for the booking')
    }
    
    return (
        <div className='container checkout-form'>
            <Form onSubmit={checkoutSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <input type="username" placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <input type="email" placeholder="Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <input type="address" placeholder="Your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <input type="phonenumber" placeholder="Your Phone Number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    );
};

export default Checkout;