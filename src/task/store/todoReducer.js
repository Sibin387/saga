import type from "./actionTypes";
const initialState = {
  taskList: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_TODOS:
      return {
        ...state,
        taskList: action.payload
      };
    case type.ADD_TODO:
      return {
        ...state,
        todoList: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
