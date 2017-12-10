import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';

const reducers = combineReducers({
    ServiceStore
});

export default createStore(reducers);
