import React, { useState, useEffect } from 'react'
import api from './services/api'
import ClientTable from './components/TabelaClient';
import { Navbar, Button, Container}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="home">Clientes</Navbar.Brand>
        </Navbar>    
        <ClientTable clients={client}/>
        <Button variant="secondary" onClick={handleRefreshClient}>Importar</Button>
      </Container>
    ) 
}


