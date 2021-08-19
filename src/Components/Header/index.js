import * as React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { Container, Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <Container>
            <h1>Header</h1>
            <Form>
                <Row xs={12} sm={2} md={2} lg={4} >
                    <Form.Group className="mb-3" controlId="formCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite CPF" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="nome" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formExercicio">
                        <Form.Label>Exercicio</Form.Label>
                        <Form.Control type="number" placeholder="exercico" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Header;
