import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'


const initStore = createStore(rootReducer)

ReactDOM.render(
	<React.StrictMode>
	  <Provider store={initStore}>
		  <BrowserRouter>
		    <App />
		  </BrowserRouter>
       </Provider>
	</React.StrictMode>,
	  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
