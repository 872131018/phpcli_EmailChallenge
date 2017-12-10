import axios from 'axios';
axios.defaults.baseURL = window.baseUrl;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content;
window.axios = axios;

window.initialize = require('./map.js');

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
