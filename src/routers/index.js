import React from 'react';
import { Router, Route } from 'dva/router';

const Home = () => <div>This is Your Home</div>
let fn = function ({ history, app }) {
    return (
        <Router history={history}>
            <Route to="/home" extact component={Home}/>
        </Router>
    )
}

export default fn;