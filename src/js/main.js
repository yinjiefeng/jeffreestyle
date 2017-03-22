/**
 * Created by jeff on 2017/3/20.
 */

import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/rootReducer';
import printStateMiddleware from './middlewares/printStateMiddleware';

let enhancedCreateStore = applyMiddleware(printStateMiddleware)(createStore);
let store = enhancedCreateStore(rootReducer);

let HelloWorld = React.createClass({
        componentDidMount: () => {
            console.log($);
        },
        render: () => {
            return (<div className="hello">Hello world13</div>);
        }
    });

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));