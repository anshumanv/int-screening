import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { questionsReducer } from './questionsReducer';

export default combineReducers({
  auth: authReducer,
  questions: questionsReducer
});