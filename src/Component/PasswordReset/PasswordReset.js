import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const PasswordReset = () => {
    const [emailReset, setEmailReset]= useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    //   const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error1,
    //   ] = useSignInWithEmailAndPassword(auth);

      const handleResetSubmit =async()=>{
        await sendPasswordResetEmail(emailReset);
        
        if (sending) {
            return;
          }else  alert('Sent email');
            
            
        
  }

    return (
        
            <div className='form-margin d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleResetSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <input onChange={(e) => setEmailReset(e.target.value)} type="email" placeholder="Enter your email" required />
                    
                </Form.Group>
                

                {
                    emailReset? (<Button className='w-75 mt-2'  variant="primary" type="submit">
                    Reset password
                </Button>) : (<Button className='w-75 mt-2' variant="primary" type="submit" disabled>
                    Reset password
                </Button>)
                }
                </Form>
                </div>
        
    );
};

export default PasswordReset;