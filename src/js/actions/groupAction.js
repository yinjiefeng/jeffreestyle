/**
 * Created by jeff on 2017/3/22.
 */
import {ADD_GROUP, DELETE_GROUP, DELETE_ALL_GROUP} from '../utils/actionTypes';

const addGroupAction = (groupName) => ({type: ADD_GROUP, groupName: groupName});
const deleteGroupAction = (groupName) => ({type: DELETE_GROUP, groupName: groupName});
const deleteAllGroup = () => ({type: DELETE_ALL_GROUP});

export default {addGroupAction, deleteGroupAction, deleteAllGroup};