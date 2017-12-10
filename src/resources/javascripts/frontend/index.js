import axios from 'axios';
axios.defaults.baseURL = 'http://localhost';
window.axios = axios;

import Store from './root.redux';
window.store = Store

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './react/App';

ReactDOM.render(
    <Provider store={ Store }>
        <App/>
    </Provider>
, document.getElementById('app'));
