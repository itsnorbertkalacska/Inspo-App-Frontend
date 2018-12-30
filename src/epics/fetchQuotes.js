import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { ofType } from 'redux-observable';

import * as ActionTypes from '../actions/types';
import * as QuoteActions from '../actions/quoteActions';

const fetchQuotes = action$ =>
  action$.pipe(
    ofType(ActionTypes.FETCH_QUOTES),
    mergeMap(() =>
      ajax.get('http://localhost:5000/api/v1/quotes').pipe(
        map(response => QuoteActions.fetchQuotesFulfilled(response.response)),
        catchError(error => of(QuoteActions.fetchQuotesRejected(error)))
      )
    )
  );

export default fetchQuotes;
