import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './redux/reducer/authReducer'

const initialState ={
  user:{
    isLogin: false,
    newuser:{
      username: '',
      email: '',
      password: '',
      avatar: '',
    }
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

