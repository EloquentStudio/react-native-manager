import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './redux/reducers';
import LoginForm from './components/loginForm.js';
///import AppRouter from './router.js';

class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAeS90m2nUts_NhZhZfHNkxvIb_g0liFMc",
      authDomain: "react-redux-f0d54.firebaseapp.com",
      databaseURL: "https://react-redux-f0d54.firebaseio.com",
      projectId: "react-redux-f0d54",
      storageBucket: "react-redux-f0d54.appspot.com",
      messagingSenderId: "915774730885"
    };
    firebase.initializeApp(firebaseConfig);
  };

  render() {
    store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
};

export default App;
