import { combineReducers } from 'redux';
import currentUser from './currentUser.js'
import plants from './plants'

const rootReducer = combineReducers({
  currentUser,
  plants
})

export default rootReducer;
