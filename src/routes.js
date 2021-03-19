import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import CriarCliente from './pages/CriarCliente';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component={Main} />
                <Route path = '/novoCliente' exact component={CriarCliente} />
            </Switch>
        </BrowserRouter>
    );
}
  
