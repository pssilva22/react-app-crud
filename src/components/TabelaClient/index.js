import React from 'react';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import api from '../../services/api'

export default function ClienteTable(props) {
    async function handleClickRemove(id) {
        try{
            await api.delete(`/client/${id}`);
            alert('Cliente deletado!!');
        } catch (err){
            console.log(err);
        }
    }

    function submit(id){
        confirmAlert({
            title: 'Remover Cliente',
            message: 'Tem certeza que deseja remover este Cliente ?',
            buttons: [
            {
                label: 'Sim',
                onClick: () => handleClickRemove(id)
            },
            {
                label: 'Não',
                onClick: () => alert('Cliente não foi deletado!!')
            }
            ]
        });
    };

    return (
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
                <tr key={client.id}>
                    <th scope="row">{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                    <td>{client.email}</td>
                    <td>
                        <Button variant="warning">Editar</Button> {' '}
                        <Button variant="danger" onClick={() => submit(client.id)}>Remover</Button>
                    </td>
                </tr>)
            })}
        </tbody>
    </Table>
    )
};