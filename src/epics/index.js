import { combineEpics } from 'redux-observable';

import fetchQuotes from './fetchQuotes';
import fetchUser from './fetchUser';
import loginUser from './loginUser';

export default combineEpics(fetchQuotes, fetchUser, loginUser);
