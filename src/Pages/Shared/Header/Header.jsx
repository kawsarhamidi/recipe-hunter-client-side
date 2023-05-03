import React, { useContext } from 'react';
import { Button, Dropdown, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBeer, FaGithub, FaGoogle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Red Chili</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">

                        <Link to='/'>Home</Link>

                    </Nav>
                    <Nav>
                        <Image className='me-2' src={user?.img} roundedCircle />
                        {user && <Button className='me-2' variant="info"><FaUserCircle></FaUserCircle></Button>}
                        { user ? <Button onClick={handelLogOut} variant="info">SinOut</Button> :
                            <Link to='/login'><Button variant="info">SinIn</Button></Link> }
                    </Nav>
                    <Dropdown  className='ms-2' >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Other Login
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><FaGoogle /> Google</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><FaGithub></FaGithub> GitHub</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;