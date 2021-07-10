import { combineReducers } from "redux";
import currentUser from "./currentUser.js";
import plants from "./plants";
import wateringEvents from "./wateringEvents";

const rootReducer = combineReducers({
  currentUser,
  plants,
  wateringEvents,
});

export default rootReducer;
