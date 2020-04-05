import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    products : ProductReducer,
    alert : AlertReducer
});