import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';

export const getInitialState = () => ({
  turn: 'X',
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  score: {
    'X':0,
    'O':0
  },
  gameOver: false
});
const store = createStore(reducer, getInitialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
