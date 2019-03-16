import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  //Profile reducer
  //post reducer
  //trade reducer, etc
});
