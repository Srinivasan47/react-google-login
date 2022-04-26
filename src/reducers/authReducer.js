/* eslint-disable default-param-last */
import * as types from '../actions';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user: user.userDetails }
  : { isLoggedIn: false, user: null };

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user.profileObj
      };
    case types.LOGOUT_USER:
      return {
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};
