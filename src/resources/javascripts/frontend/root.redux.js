import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import EmailStore from './reducers/email.redux';

const reducers = combineReducers({
    ServiceStore,
    EmailStore
});

export default createStore(reducers);
