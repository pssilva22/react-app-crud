import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ClientTable = (props) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Age</th>
                <th>Email</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            { props.clients.map((client, index) => {
                return (
                <tr>
                    <th scope="row">{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                    <td>{client.email}</td>
                    <td>
                        <Button variant="warning">Editar</Button> {' '}
                        <Button variant="danger">Excluir</Button>
                    </td>
                </tr>)
            })}
        </tbody>
    </Table>
);

export default ClientTable;