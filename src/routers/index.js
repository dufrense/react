import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from '../components/App';
import Game from '../components/Game';

const Home = () => <div>This is Your Home11</div>
let fn = function ({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                <Route to="/game" extact component={Game}/>
                <Route to="/home" extact component={App}/>
            </Switch>
        </Router>
    )
}

export default fn;