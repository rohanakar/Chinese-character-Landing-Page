import screenReducer from './screenReducer';
import navbarReducer from './navbarReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers(
    {
        screenReducer,
        navbarReducer
    });

export default allReducers;