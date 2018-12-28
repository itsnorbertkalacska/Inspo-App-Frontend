import * as ActionTypes from '../actions/types';

const initialState = {
  detail: {
    error: false,
    data: null,
    loading: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_USER: {
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true,
        },
      };
    }

    case ActionTypes.FETCH_USER_REJECTED: {
      return {
        ...state,
        detail: {
          ...state.detail,
          error: true,
          loading: false,
        },
      };
    }

    case ActionTypes.FETCH_USER_FULFILLED: {
      return {
        ...state,
        detail: {
          ...state.detail,
          error: null,
          data: action.payload,
          loading: false,
        },
      };
    }

    default:
      return state;
  }
}
