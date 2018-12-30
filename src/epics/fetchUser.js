import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { ofType } from 'redux-observable';

import * as ActionTypes from '../actions/types';
import * as UserActions from '../actions/userActions';

const fetchUser = action$ =>
  action$.pipe(
    ofType(ActionTypes.FETCH_USER),
    mergeMap(action =>
      ajax.get(`http://localhost:5000/api/v1/users/${action.payload}`).pipe(
        map(response => UserActions.fetchUserFulfilled(response.response)),
        catchError(error => of(UserActions.fetchUserRejected(error)))
      )
    )
  );

export default fetchUser;
