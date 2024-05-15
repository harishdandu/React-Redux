// index.js or your main file
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer

import App from './App';

import { createRoot } from 'react-dom/client';

const store = createStore(rootReducer); // Create Redux store
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}> {/* Wrap your App component with Provider */}
<App />
</Provider>);



// ReactDOM.render(
//   <Provider store={store}> {/* Wrap your App component with Provider */}
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
