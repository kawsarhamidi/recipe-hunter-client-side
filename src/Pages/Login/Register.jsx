import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handelRegistration = e =>{
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const images = form.images.value;
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
        })
        .catch(error =>{
             console.error(error)
            })
    }

    return (
        <Container>
            <Form onSubmit={handelRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>You Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Images</Form.Label>
                    <Form.Control type="text" name='images' placeholder="Enter Images" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to='/login'>SinIn</Link>
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

export default Register;