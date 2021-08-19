import * as React from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { listUO } from '../../libs/UO'
// import { Container, Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <Container>
            <h1>Header</h1>
            <Form>
                <Row  >
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite CPF" />
                        </Form.Group>
                    </Col>
                    <Col xl={5} lg={5} md={6} sm={8} >
                        <Form.Group className="mb-3 " controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome" />
                        </Form.Group>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3 " controlId="formExercicio">
                            <Form.Label>Exercicio</Form.Label>
                            <Form.Control type="number" placeholder="exercico" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={5} >
                        <Form.Group className="mb-3" controlId="dataInicio">
                            <Form.Label>Data Inicial</Form.Label>
                            <Form.Control type="date"  />
                        </Form.Group>
                    </Col>
                    <Col xl={3}  lg={3} md={3} sm={5} >
                        <Form.Group className="mb-3" controlId="dataFim">
                            <Form.Label>Data Final</Form.Label>
                            <Form.Control type="date"  />
                        </Form.Group>
                    </Col>
                    <Col xl={4} lg={8} md={8} sm={5} >
                        <Form.Group className="mb-3"  controlId="formCpf">
                            <Form.Label>Unidade Orçamentária</Form.Label>

                            <Dropdown>

                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Selecione Unidade Orçamentária
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                   { listUO.map( uo => <Dropdown.Item  key={uo.codigo} >{uo.descricao}</Dropdown.Item> ) }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Col>

                </Row>
                <Button variant="primary" type="submit">
                    Consultar
                </Button>
            </Form>
        </Container>
    )
}

export default Header;


// xs={12} sm={2} md={2} lg={4}