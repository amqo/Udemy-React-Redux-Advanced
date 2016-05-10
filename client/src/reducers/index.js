import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  // ES6 equivalent to form: form
  form
});

export default rootReducer;
