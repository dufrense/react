import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store';
import App from './App';

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default AppWrapper;