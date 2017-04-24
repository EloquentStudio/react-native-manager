import * as ActionTypes from './../actions/types.js';
const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.EMAIL_CHANGED:
      return {...state, email: action.payload.email};
      break;
    case ActionTypes.PASSWORD_CHANGED:
      return {...state, password: action.payload.password};
      break;
    case ActionTypes.LOGIN_USER:
      return {...state, loading: true}
      break;
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {...state, user: action.payload.user, error: '', loading: false};
      break;
    case ActionTypes.LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed!!', password: '', loading: false};
      break;
    default:
      return state;
   }
}
