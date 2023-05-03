import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3} sm>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={9} sm>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;