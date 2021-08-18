import * as React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { Container, Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <Container>
            <h1>Header</h1>
            <Form>
                <Row >
                    <Form.Group className="mb-3 col-2" controlId="formBasicEmail">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite CPF" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="nome" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>        </Container>
    )
}

export default Header;
