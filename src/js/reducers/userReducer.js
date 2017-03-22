/**
 * Created by jeff on 2017/3/22.
 */
import {ADD_USER, DELETE_USER, DELETE_ALL_USER} from '../utils/actionTypes';

const userList = [];

const userReducer = (state = userList, action) => {
    switch (action.type) {
        case ADD_USER:
            return state.push(action.userName);
        case DELETE_USER:
            return state.remove(action.userName);
        case DELETE_ALL_USER:
            return state.clear();
        default:
            return state;
    }
}

export default userReducer;