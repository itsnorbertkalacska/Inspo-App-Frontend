import * as ActionTypes from '../actions/types';

const initialState = {
  login: {
    error: null,
    loading: false,
  },
  profile: {
    data: null,
    isLoggedIn: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      return {
        ...state,
        login: {
          ...state.login,
          error: null,
          loading: true,
        },
      };
    }

    case ActionTypes.LOGIN_USER_FULFILLED: {
      return {
        ...state,
        login: {
          error: null,
          loading: false,
        },
        profile: {
          ...state.profile,
          isLoggedIn: true,
        },
      };
    }

    case ActionTypes.LOGIN_USER_REJECTED: {
      return {
        ...state,
        login: {
          ...state.login,
          error: action.payload.response.errorMessage,
          loading: false,
        },
      };
    }

    default:
      return state;
  }
}
