import * as types from "../store/types";
import api from "../../lib/api";
import { setNotification } from "./notificationActions";

export const getAllCategory = () => async (dispatch) => {
  try {
    const res = await api.get("/category");
    dispatch({
      type: types.GET_ALL_CATEGORY,
      payload: res.data.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const createCategory = (body) => async (dispatch) => {
  try {
    const res = await api.post("/category", body);
    dispatch({
      type: types.CREATE_CATEGORY,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const updateCategory = (id, allCategory) => async (dispatch) => {
  try {
    const res = await api.patch("/category", body);
    dispatch({
      type: types.UPDATE_CATEGORY,
      payload: res.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const deleteCategory = (id, categories) => async (dispatch) => {
  try {
    await api.delete(`/category/${id}`);
    const fCategories = categories.filter((filter) => filter._id !== id);
    console.log(fCategories);
    dispatch({
      type: types.DELETE_CATEGORY,
      payload: fCategories,
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
