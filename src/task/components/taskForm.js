import React, { useState } from "react";
import { Form } from "antd";
import Field from "../common/field";
import Button from "../common/button";
const AddTaskForm = props => {
  const [taskTitle, setTaskTitle] = useState("");
  const {
    handlers: { handleSubmit }
  } = props;

  const handleChange = event => {
    setTaskTitle(event.target.value);
  };
  const handleAddTask = event => {
    event.preventDefault();
    if (taskTitle !== "") {
      const data = {
        id: new Date().getTime(),
        title: taskTitle,
        status: "pending"
      };
      handleSubmit(data);
      setTaskTitle("");
    }
  };

  return (
    <Form layout="inline" onSubmit={handleAddTask}>
      <Form.Item validateStatus="" help="">
        <Field
          handlers={{
            handleChange,
            placeholder: "Task title",
            value: taskTitle
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          handlers={{
            type: "submit",
            value: "Add"
          }}
        />
      </Form.Item>
    </Form>
  );
};
export default AddTaskForm;
