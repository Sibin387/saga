import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "../store/actionTypes";
const dispatch = useDispatch();
const handleAddSubmit = data => {
  dispatch({
    type: `${type.ADD_TODOS}_REQUESTED`,
    data: {
      id: 1571043501590,
      title: "Manunggab nasad",
      status: "pending"
    }
  });
};

export default {
  handleAddSubmit
};
