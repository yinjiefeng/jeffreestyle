/**
 * Created by jeff on 2017/3/22.
 */
import {combineReducers} from 'redux';
import userReducer from './userReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
    userReducer,
    groupReducer
});

export default rootReducer;