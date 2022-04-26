/* eslint-disable import/prefer-default-export */
import * as types from './index';

const loginUserAction = (user) => ({
  type: types.LOGIN_USER,
  user
});

const logoutUser = () => ({
  type: types.LOGOUT_USER
});
export { loginUserAction, logoutUser };
