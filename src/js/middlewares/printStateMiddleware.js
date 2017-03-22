/**
 * Created by jeff on 2017/3/22.
 */
const printStateMiddleware = ({middlewareAPI}) => dispatch => action => {
    console.log('state before dispatch', middlewareAPI.getState());

    let returnValue = dispatch(action);

    console.log('state after dispatch', middlewareAPI.getState());

    return returnValue;
}

export default printStateMiddleware;