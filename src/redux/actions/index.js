import firebase from 'firebase';
import * as ActionTypes from './types.js';

export const emailChanged = (email) => {
  return {
    type: ActionTypes.EMAIL_CHANGED,
    payload: {email},
  }
};

export const passwordChanged = (password) => {
  return {
    type: ActionTypes.PASSWORD_CHANGED,
    payload: {password},
  }
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (user) => { userLoginSuccess(dispatch, user) })
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => { userLoginSuccess(dispatch, user) } )
          .catch( (error) => {userLoginFailure(dispatch, error)} )
      });
  };
};

const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: {user}
  });
};

const userLoginFailure = (dispatch, error) => {
  dispatch({
    type: ActionTypes.LOGIN_USER_FAIL,
    payload: {error}
  });
};
