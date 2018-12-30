import * as ActionTypes from './types';

const fetchQuotes = () => ({ type: ActionTypes.FETCH_QUOTES });

const fetchQuotesFulfilled = payload => ({
  type: ActionTypes.FETCH_QUOTES_FULFILLED,
  payload,
});

const fetchQuotesRejected = payload => ({
  type: ActionTypes.FETCH_QUOTES_REJECTED,
  payload,
});

export { fetchQuotes, fetchQuotesFulfilled, fetchQuotesRejected };
