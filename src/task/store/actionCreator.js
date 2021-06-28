import type from "./actionTypes";

const AddTodo = data => {
  return {
    type: type.ADD_TODO,
    payload: data
  };
};
const GetTodos = data => {
  return {
    type: type.GET_TODOS,
    payload: data
  };
};

export default {
  AddTodo,
  GetTodos
};
