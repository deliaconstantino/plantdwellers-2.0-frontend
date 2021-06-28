import { combineReducers } from 'redux';
import currentUser from './currentUser.js'

const rootReducer = combineReducers({
  currentUser
})

export default rootReducer;
