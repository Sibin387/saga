import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import { Provider } from "react-redux";
import storage from "./utils/storeConfig";
import "antd/dist/antd.css";

import "./styles.css";
import TodoList from "./task/index";
function App() {
  return (
    <div className="App">
      <div>
        <Row>
          <Col span={12}>
            <TodoList />
          </Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  rootElement
);
