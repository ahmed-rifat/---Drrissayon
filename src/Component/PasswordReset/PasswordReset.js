import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const PasswordReset = () => {
    const [email, setEmail]= useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );

    return (
        <div>
            <div className='form-margin'>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    
                </Form.Group>
                <Button onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                        }} variant="primary" type="submit">
                    Reset Button
                </Button>
                </Form>
                </div>
        </div>
    );
};

export default PasswordReset;