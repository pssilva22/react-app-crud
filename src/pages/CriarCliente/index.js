import React, {useState} from 'react'
import { Container, Button, Col, Row, Form} from "react-bootstrap";
import {StyledLink} from '../../style/styles';
import api from '../../services/api'

export default function CriarCliente() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setIdade] = useState("");

    async function handleNovoCliente(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            age,
        };

        try {
            api.post("/client", data, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Access-Control-Allow-Origin": "*",
            },
            });
        } catch (err) {
            alert("Erro ao cadastrar, tente novamente!");
        }
        alert("Cadastro Realizado com sucesso!");
    }

    return(
    <Container>
        <Row>
            <Col>
                <Form onSubmit={handleNovoCliente}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Digite o email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}/>
                        <Form.Text className="text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Digite o nome" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Age</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Digite a Idade" 
                            onChange={(e) => setIdade(e.target.value)}
                            value={age}/>
                    </Form.Group>
                    
                    <StyledLink color="FFF" to="/">Voltar</StyledLink>{' '}
                    <Button variant="outline-secondary" type="submit" >Enviar</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}