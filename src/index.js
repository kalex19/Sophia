import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';


const store = createStore(rootReducer, composedWithDevTools);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

