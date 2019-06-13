import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers'

const store = createStore(reducers);
ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))