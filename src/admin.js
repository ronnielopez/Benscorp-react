import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Template from './template.js'
import Adminis from './components/sections/adminSection.js'
function Admin() {
    return(
    <BrowserRouter>
        <Route exact path='/' component={Template}></Route>
        <Route exact path='/admin' component={Adminis}></Route>
    </BrowserRouter>
    );
}

export default Admin;