import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import dva from 'dva';
import { createBrowserHistory } from 'history';
import router from './routers';

let app = new dva({
  history: createBrowserHistory()
});

app.router(router);
app.start('#root');

