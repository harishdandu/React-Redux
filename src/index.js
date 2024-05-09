// index.js or your main file
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer

import App from './App';

const store = createStore(rootReducer); // Create Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App component with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
