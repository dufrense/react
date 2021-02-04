import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from '../components/App';
import Game from '../components/Game';

const Home = () => <div>This is Your Home11</div>
let fn = function ({ history, app }) {
    return (
        <Router history={history}>
            <Switch>         
                <Route exact path="/" component={App}/>        
                <Route path="/home" component={App}/>
                <Route path="/game" component={Game}/>  
            </Switch>
        </Router>
    )
}   

export default fn; 