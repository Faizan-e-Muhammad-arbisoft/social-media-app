import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Loginpage = () => {
    const users= [
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'}
    ];

    const handleOnClick = (e: any) => {
        e.preventDefault();

        console.log('Button clicks');
    };

    return(
        <div>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={(e) =>handleOnClick(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Loginpage;