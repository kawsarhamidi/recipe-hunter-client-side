import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link to='/register'>register</Link>
                <br />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;