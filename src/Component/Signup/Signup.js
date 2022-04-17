import React, { useState, useSyncExternalStore } from 'react';
import { Button, Form } from 'react-bootstrap';
import Google from '../Google/Google';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';


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

    console.log(createUserWithEmailAndPassword);

    const handlesubmit=(event)=>{
      event.preventDefault();
      createUserWithEmailAndPassword(email, password)
      navigate('/login');

    }
    return (
        <div className='container'>
                
                <div className='form-margin'>
                <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name"  />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
                </Form>
            </div>
            <div><p>Already have an account? <Link to='/login'>Please login</Link></p></div>
            <div>or</div>
            <hr />
            <div><Google></Google></div>

            
        </div>
    );
};

export default Signup;