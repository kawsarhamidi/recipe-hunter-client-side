import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/chef'

    const handelSignIn = e =>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            navigate(from, { replace: true });
        })
        .catch(error =>{
             console.log(error)
            })
    }

    return (
        <Container>
            <Form onSubmit={handelSignIn}>
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