/**
 * Root Reducer
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


// Import reducers
import app from './App/AppReducers'


// combine all reducers into one root reducer
export default combineReducers({
  app,
  form: formReducer,
});
