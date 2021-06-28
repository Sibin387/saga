import React from "react";
import { Button } from "antd";
const Btn = props => {
  const {
    handlers: { type, value, handleSubmit }
  } = props;
  return (
    <Button type="primary" htmlType={type} onClick={handleSubmit}>
      {value}
    </Button>
  );
};
export default Btn;
