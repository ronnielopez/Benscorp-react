import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Template from './template.js'
import Adminis from './components/admin/adminSection.js'
import InicioAd from './components/admin/inicioadmin.js'
function Admin() {
    return(
    <BrowserRouter>
        <Route exact path='/' component={Template}></Route>
        <Route exact path='/admin' component={Adminis}></Route>
        <Route exact path='/admin/inicio' component={InicioAd}></Route>
    </BrowserRouter>
    );
}

export default Admin;