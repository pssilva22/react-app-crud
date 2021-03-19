import React from 'react'
import { Container, Button, Col, Row, Form} from "react-bootstrap";
import {StyledLink} from '../../style/styles';

export default function CriarCliente() {
    return(
    <Container>
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite email" />
                        <Form.Text className="text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Seu nome" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="age" placeholder="Idade" />
                    </Form.Group>
                    <StyledLink color="FFF" to="/">Voltar</StyledLink>{' '}
                    <Button variant="outline-secondary" type="submit" >Enviar</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}