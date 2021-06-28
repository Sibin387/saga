import React, { useState } from "react";
import { Table, Column, Divider } from "antd";
import Field from "../common/field";
import Button from "../common/button";
const initialState = {
  id: null,
  status: "",
  title: ""
};
const TaskList = props => {
  const [updateTask, setUpdateTask] = useState(initialState);
  const {
    handlers: { handleUpdate, handleDelete },
    taskList
  } = props;

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdateTask(prevVal => ({ ...prevVal, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (updateTask.title !== "") {
      handleUpdate(updateTask);
      setUpdateTask(initialState);
    }
  };
  const viewUpdate = data => {
    setUpdateTask(data);
  };
  const moveToDone = data => {
    data.status = 'Done'
    handleUpdate(data);
  }
  return (
    <>
      <Table dataSource={taskList}>
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          render={(title, task) => {
            if (task.id === updateTask.id) {
              return (
                <Field
                  handlers={{
                    handleChange,
                    placeholder: "Task title",
                    value: updateTask.id != null ? updateTask.title : title,
                    name: "title"
                  }}
                />
              );
            } else {
              return title;
            }
          }}
        />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Action"
          dataIndex="id"
          key="id"
          render={(id, task) => {
            if (id === updateTask.id) {
              return (
                <Button
                  handlers={{
                    type: "submit",
                    value: "Save",
                    handleSubmit
                  }}
                />
              );
            } else {
              return (
                <span>
                  <a onClick={() => viewUpdate(task)}>Update</a>
                  <Divider type="vertical" />
                  <a onClick={() => moveToDone(task)}>Done</a>
                  <Divider type="vertical" />
                  <a onClick={() => handleDelete(id)}>Delete</a>
                </span>
              );
            }
          }}
        />
      </Table>
    </>
  );
};
export default TaskList;
