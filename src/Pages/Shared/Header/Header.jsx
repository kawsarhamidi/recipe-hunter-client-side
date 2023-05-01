import React from 'react';
import { Button, Dropdown, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Red Chili</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                    </Nav>
                    <Nav>
                    <Image src="holder.js/171x180" roundedCircle />
                    <Button variant="info">Login</Button>
                    <Button variant="info">SinUp</Button>
                    </Nav>
                    <Dropdown>
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