import * as types from "../store/types";
import api from "../../lib/api";
import { setNotification } from "./notificationActions";

export const getAllTags = () => async (dispatch) => {
  try {
    const res = await api.get("/tag");
    dispatch({
      type: types.GET_ALL_TAG,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const createTag = (body) => async (dispatch) => {
  try {
    const res = await api.post("/tag", body);
    dispatch({
      type: types.CREATE_TAG,
    });
    dispatch(setNotification("Tag succesfully created, Add More!"));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const updateTag = (id, allTags) => async (dispatch) => {
  try {
    const res = await api.patch("/tag", body);
    dispatch({
      type: types.UPDATE_TAG,
      payload: res.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const deleteTag = (id, tags) => async (dispatch) => {
  try {
    const res = await api.delete(`/tag/${id}`);
    const fTags = tags.filter((tag) => tag._id !== id);
    dispatch({
      type: types.DELETE_TAG,
      payload: fTags,
    });
  } catch (err) {
    console.log(err.response);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
