import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Container, Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <Container>
            <h1>Header</h1>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}

export default Header;
