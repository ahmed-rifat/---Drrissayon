import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import Google from '../Google/Google';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate =useNavigate();

    const handleLoginSubmit =(e)=>{
          e.preventDefault();
          signInWithEmailAndPassword(email, password);
          navigate('/home');
    }

    
    return (
        <div className='container'>
            <div className='form-margin'>
                <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                
                </Form>
                
            </div>
            <div>
            
            <p>
                Don't have an account? <Link to='/signup'>Please Signup</Link></p>
                <p>Forget password? <Link to='/reset'>reset here</Link></p>
            </div>
            <div >OR</div>
           
            <div><Google></Google></div>

        </div>
    );
};

export default Login;