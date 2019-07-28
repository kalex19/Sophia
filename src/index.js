import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, composedWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

