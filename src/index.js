import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';
import modelIndex from './models';
import dva from 'dva';
import { createBrowserHistory } from 'history';
import router from './routers';

let app = new dva({
  history: createBrowserHistory()
});

app.model(modelIndex);
app.router(router);
app.start('#root');

