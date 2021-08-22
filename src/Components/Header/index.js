import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { listUO } from '../../libs/UO'
import { useForm } from "react-hook-form";
import GridDiaria from "../GridDiaria";
import { getApiEndPointSimple } from "../../libs/getApiEndPointSimple";
import { clearData } from "../../libs/lib";
import CircularIndeterminate from "../../libs/Progress";



function Header() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { prepareData() }

    async function prepareData() {
        CircularIndeterminate()
        let resultData = await getApiEndPointSimple('http://localhost:3333/pesquisa');
        resultData = clearData(resultData)
        GridDiaria(resultData);

    }

 
    return (
        <Container>
            <h1>Header</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row  >
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite CPF" {...register('cpf')} />
                        </Form.Group>
                    </Col>
                    <Col xl={5} lg={5} md={6} sm={8} >
                        <Form.Group className="mb-3 " controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome" {...register('nome')} />
                        </Form.Group>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3 " controlId="formExercicio">
                            <Form.Label>Exercicio</Form.Label>
                            <Form.Control type="number" placeholder="exercico" {...register('exercicio')} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={5} >
                        <Form.Group className="mb-3" controlId="dataInicio">
                            <Form.Label>Data Inicial</Form.Label>
                            <Form.Control type="date" {...register('dataInicio')} />
                        </Form.Group>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={5} >
                        <Form.Group className="mb-2" controlId="dataFim"  >
                            <Form.Label>Data Final</Form.Label>
                            <Form.Control type="date" {...register('dataFinal')} />
                        </Form.Group>
                    </Col>
                    <Col lg={5} md={8} sm={9} xl={4} xxl={4} >
                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>Unidade Orçamentária</Form.Label>
                            <select className="form-select form-select-sm mb-3" {...register('UO')}>
                                <option defaultValue value>Selecione Unidade </option>
                                {listUO.map(uo => <option key={uo.codigo} value={uo.codigo} >{uo.descricao}</option>)}
                            </select>
                        </Form.Group>
                    </Col>

                </Row>
                <Button className="mb-3" variant="primary" type="submit">
                    Consultar
                </Button>
            </Form>
            <Row>
                <div className='GridDiaria' id='grid-diarias'></div>
            </Row>
        </Container>
    )
}

export default Header;


// xs={12} sm={2} md={2} lg={4}