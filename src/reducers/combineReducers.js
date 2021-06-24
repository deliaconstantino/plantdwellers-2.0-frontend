import { combineReducers } from 'redux';
import loginReducer from './loginForm'
import currentUser from './currentUser.js'

const rootReducer = combineReducers({
  loginForm: loginReducer,
  currentUser
})

export default rootReducer;
