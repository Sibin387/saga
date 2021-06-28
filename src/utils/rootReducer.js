import { combineReducers } from "redux";
import todo from "../task/store/todoReducer";

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
