import React from 'react';

import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom'

import Home from './pages/Home/Home';
import Auth from './pages/Auth/index';

import './components/assets/global.css'

function Routes() {
    return (
        // <Router>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Auth} />
                {/* <Route path='/list' component={List} /> */}
                <Route path='/home' component={Home} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
        // </Router>
    );
}

export default Routes;




