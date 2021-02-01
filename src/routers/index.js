import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import AppWrapper from '../AppWrapper';

const Home = () => <div>This is Your Home</div>
let fn = function ({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                <Route to="/" exact component={AppWrapper}/>
                <Route to="/home" extact component={Home}/>
            </Switch>
        </Router>
    )
}

export default fn;