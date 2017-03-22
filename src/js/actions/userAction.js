/**
 * Created by jeff on 2017/3/22.
 */
import {ADD_USER, DELETE_USER, DELETE_ALL_USER} from '../utils/actionTypes';

const addUserAction = (userName) => ({type: ADD_USER, userName: userName});
const deleteUserAction = (userName) => ({type: DELETE_USER, userName: userName});
const deleteAllUser = () => ({type: DELETE_ALL_USER});

export default {addUserAction, deleteUserAction, deleteAllUser};