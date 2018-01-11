import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Root from './containers/Root.dev'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
