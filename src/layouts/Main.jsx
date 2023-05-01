import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3} sm>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={9} sm>
                        sm=true
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;