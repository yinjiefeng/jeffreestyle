/**
 * Created by jeff on 2017/3/22.
 */
const groupList = [];

import {ADD_GROUP, DELETE_GROUP, DELETE_ALL_GROUP} from '../utils/actionTypes';

const groupReducer = (state = groupList, action) => {
    switch (action.type) {
        case ADD_GROUP:
            return state.push(action.groupName);
        case DELETE_GROUP:
            return state.remove(action.groupName);
        case DELETE_ALL_GROUP:
            return state.clear();
        default:
            return state;
    }
}

export default groupReducer;