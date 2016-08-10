import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import authors from './reducers/authors'
import books from './reducers/books'
import { combineReducers } from 'redux'



const reducer = combineReducers({
  authors: authors,
  books: books
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
