import * as ActionTypes from '../actions/types';

const initialState = {
  list: {
    error: false,
    data: [],
    loading: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_QUOTES: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    }

    case ActionTypes.FETCH_QUOTES_REJECTED: {
      return {
        ...state,
        list: {
          ...state.list,
          error: true,
          loading: false,
        },
      };
    }

    case ActionTypes.FETCH_QUOTES_FULFILLED: {
      return {
        ...state,
        list: {
          ...state.list,
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
