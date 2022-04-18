import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    const notify = () => toast.success('Thank you for booking');
    
    
    
    return (
        <div className='container checkout-form d-flex justify-content-center align-items-center'>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <input className='input-space' type="username" placeholder="Enter your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <input className='input-space' type="email" placeholder="Enter Your email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <input className='input-space' type="address" placeholder="Your address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <input className='input-space' type="phonenumber" placeholder="Your Phone Number" required />
                </Form.Group>
                <Button onClick={notify} variant="primary" type="submit">
                    Submit
                </Button>
                <Toaster position='top-center' />
            </Form>
            
        </div>
    );
};

export default Checkout;