import { combineReducers } from 'redux';

import auth from './authReducer';
import quote from './quoteReducer';
import user from './userReducer';

export default combineReducers({
  auth,
  quote,
  user,
});
