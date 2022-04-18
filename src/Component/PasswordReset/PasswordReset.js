import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import toast, { Toaster } from 'react-hot-toast';


const PasswordReset = () => {
    const notify = () => toast.success('Email sent! Check your Email');

    const [emailReset, setEmailReset]= useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
        
      const handleResetSubmit =async()=>{
        await sendPasswordResetEmail(emailReset);
        
        if (sending) {
            return;
          }
            
            
        
  }

    return (
        
            <div className='form-margin d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleResetSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <input onChange={(e) => setEmailReset(e.target.value)} type="email" placeholder="Enter your email" required />
                    
                </Form.Group>
                

                {
                    emailReset? (<Button onClick={notify} className='w-75 mt-2'  variant="primary" type="submit">
                    Reset password
                </Button>) : (<Button className='w-75 mt-2' variant="primary" type="submit" disabled>
                    Reset password
                </Button>)
                }
                <Toaster position='top-center' />
                </Form>
                </div>
        
    );
};

export default PasswordReset;