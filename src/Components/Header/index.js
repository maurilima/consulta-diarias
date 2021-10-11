import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { listUO } from '../../libs/UO'
import { useForm } from "react-hook-form";
import GridDiaria from "../GridDiaria";
// import Remote from "../../temp/NovoTeste";
// import ValidarApi from "../../temp/ValidarApi/ValidarApi";

let raw ={};
// const schema = yup.object().shape({
//     // exercicio : yup.number("Deve Ser Numero"),
//     // dataInicio: yup.date(),
//     // dataFim   : yup.date(),
//     // uo: yup.string()
// });



// let progressCreated = false;


function ValidateData(data) {
    let vazio = 0;

    Object.keys(data).forEach((item) => {
        // console.log('it=' + item + data[item])
        if (!data[item]) {
            vazio++
        }
        else {
            if (item === 'codUnidadeOrcamentaria') {
                if (data[item] !== 'true') {
                    raw = {...raw, [item]  : data[item]   }         
                }
            }
            else raw = {...raw, [item]  : data[item]   }
        }
    })

    if (vazio === 5 && data.codUnidadeOrcamentaria === 'true') {
        alert('Informe ao menos um campo')

    }
    else{ 
        raw = {...raw, 'size': 1000}  //   default = 20 
        prepareData(raw); 
}


}

function prepareData(raw) {
    GridDiaria(raw)
     
     
}





function Header() {
    const { register, handleSubmit} = useForm()
        // resolver: yupResolver(schema)
    // });
    const onSubmit = data => { ValidateData(data)  }

   

    return (
        <Container>
            <h1>Header</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row  >
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3" controlId="Cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite CPF" {...register("cpf")} />
                        </Form.Group>
                    </Col>
                    <Col xl={5} lg={5} md={6} sm={8} >
                        <Form.Group className="mb-3 " controlId="nomeCredor">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome"  {...register("nomeCredor")} />
                        </Form.Group>
                    </Col>
                    <Col xl={2} lg={3} md={3} sm={4} >
                        <Form.Group className="mb-3 " controlId="codExercicio">
                            <Form.Label>Exercicio</Form.Label>
                            <input
                                type="number"
                                // defaultValue={0}
                                placeholder="exercicio"
                                {...register("codExercicio")} />
                        </Form.Group>
                        {/* {errors.exercicio && <p>{errors.codExercicio.message}</p>} */}
                    </Col>
                </Row>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={5} >
                        <Form.Group className="mb-3" controlId="dataInicial">
                            <Form.Label>Data Inicial</Form.Label>
                            <Form.Control type="date" {...register("dataInicial")} />
                        </Form.Group>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={5} >
                        <Form.Group className="mb-2" controlId="dataFinal"  >
                            <Form.Label>Data Final</Form.Label>
                            <Form.Control type="date" {...register("dataFinal")} />
                        </Form.Group>
                    </Col>
                    <Col lg={5} md={8} sm={9} xl={4} xxl={4} >
                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>Unidade Orçamentária</Form.Label>
                            <select className="form-select form-select-sm mb-3" {...register("codUnidadeOrcamentaria")}>
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
            <Row id='progress' className="progressIndicator">
            </Row>
            <Row>
                {/* <Remote /> */}
                <div className='GridDiaria' id='grid-diarias'></div>
            </Row>
        </Container>
    )
}

export default Header;


// xs={12} sm={2} md={2} lg={4}