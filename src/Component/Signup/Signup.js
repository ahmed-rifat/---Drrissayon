import React, { useState, useSyncExternalStore } from 'react';
import { Button, Form } from 'react-bootstrap';
import Google from '../Google/Google';
import auth from '../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css';


const Signup = () => {

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const navigate = useNavigate();


    const handlesubmit=(event)=>{
      event.preventDefault();
      createUserWithEmailAndPassword(email, password)
      navigate('/login');

    }
    return (
        <div className='container'>
                
                <div className='form-margin d-flex justify-content-center align-items-center'>
                <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='input-space' onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name"  />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='input-space' onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input className='input-space' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input className='input-space' onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
                
                </Form>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-3'><p>Already have an account? <Link to='/login'>Please login</Link></p></div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50' ></div>
                <p className='d-flex justify-content-center align-items-center px-2 mt-3'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            
            <div className='d-flex justify-content-center align-items-center mt-3 me-4'><Google></Google></div>

            
        </div>
    );
};

export default Signup;