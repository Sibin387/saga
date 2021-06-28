import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "./store/actionTypes";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
const Task = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector(state => {
    return {
      taskList: state.todo.taskList
    };
  });
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    dispatch({
      type: `${type.GET_TODOS}_REQUESTED`
    });
  };
  const handleUpdate = data => {
    dispatch({
      type: `${type.UPDATE_TODO}_REQUESTED`,
      data
    });
  };
  const handleDelete = id => {
    if (window.confirm(`Are you sure you want to delete task?`)) {
      dispatch({
        type: `${type.REMOVE_TODO}_REQUESTED`,
        id
      });
    }
  };
  const handleSubmit = data => {
    dispatch({
      type: `${type.ADD_TODO}_REQUESTED`,
      data
    });
  };
  return (
    <>
      <TaskForm handlers={{ handleSubmit }} />
      <TaskList handlers={{ handleUpdate, handleDelete }} taskList={taskList} />
    </>
  );
};
export default Task;
