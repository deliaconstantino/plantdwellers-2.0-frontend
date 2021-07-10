import { combineReducers } from "redux";
import currentUser from "./currentUser.js";
import plants from "./plants";
import wateringDates from "./wateringDates.js";

const rootReducer = combineReducers({
  currentUser,
  plants,
  wateringDates,
});

export default rootReducer;
