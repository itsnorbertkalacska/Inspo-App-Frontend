import * as ActionTypes from './types';

const fetchUser = userId => ({ type: ActionTypes.FETCH_USER, payload: userId });

const fetchUserFulfilled = payload => ({
  type: ActionTypes.FETCH_USER_FULFILLED,
  payload,
});

const fetchUserRejected = payload => ({
  type: ActionTypes.FETCH_USER_REJECTED,
  payload,
});

const login = payload => ({
  type: ActionTypes.LOGIN_USER,
  payload,
});

const loginFulfilled = () => ({
  type: ActionTypes.LOGIN_USER_FULFILLED,
});

const loginRejected = payload => ({
  type: ActionTypes.LOGIN_USER_REJECTED,
  payload,
});

export {
  fetchUser,
  fetchUserFulfilled,
  fetchUserRejected,
  login,
  loginFulfilled,
  loginRejected,
};
