import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { catchError } from 'rxjs/operators/catchError';
import { ofType } from 'redux-observable';

import * as ActionTypes from '../actions/types';
import * as UserActions from '../actions/userActions';

const fetchUser = action$ =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_USER),
    mergeMap(action =>
      ajax
        .post(`http://localhost:5000/api/v1/login`, action.payload, {
          'Content-Type': 'application/json',
        })
        .pipe(
          map(response => {
            localStorage.setItem('user', response.response);
            return UserActions.loginFulfilled();
          }),
          catchError(error => of(UserActions.loginRejected(error)))
        )
    )
  );

export default fetchUser;
