import { combineReducers } from 'redux';
import loginReducer from './loginForm'

const rootReducer = combineReducers({
  loginForm: loginReducer
})

export default rootReducer;
