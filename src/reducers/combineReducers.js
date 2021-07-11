import { combineReducers } from "redux";
import currentUser from "./currentUser.js";
import plants from "./plants";
import wateringEvents from "./wateringEvents";
import home from "./home";

const rootReducer = combineReducers({
  currentUser,
  plants,
  wateringEvents,
  home,
});

export default rootReducer;
