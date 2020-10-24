import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './store';

import './index.css';
import App from './App';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 10,
});

const store = createStore(
  rootReducer,
  // composeWithDevTools(...
  composeEnhancers(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
