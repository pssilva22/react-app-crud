import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import ClientTable from '../../components/TabelaClient';
import {Navbar, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Home, StyledLink} from '../../style/styles';

export default function App() {
    const [client, setClient] = useState([]);
    /*
        ComponentDidMount() -> Load Inicial
    */
    useEffect(() => {
        handleRefreshClient();
    }, []);

    async function handleRefreshClient() {
        const response = await api.get('/client');
    
        setClient(response.data);
    }

    return (
      <Container>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">CRUD</Navbar.Brand>
        </Navbar>   
        <Home>
            <StyledLink color="FFF" to="/novoCliente">Novo Cliente</StyledLink>{' '}
            <Button variant="outline-secondary" onClick={handleRefreshClient}>Atualizar</Button>
        </Home>
        <ClientTable clients={client}/>
      </Container>
    ) 
}


