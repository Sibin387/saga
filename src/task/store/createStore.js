import { createStore } from "redux";
import reducer from "./todoReducer";

const store = () => {
  return createStore(reducer);
};
export default store;
