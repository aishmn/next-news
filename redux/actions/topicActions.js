import * as types from "../store/types";
import api from "../../lib/api";
import { setNotification } from "./notificationActions";

export const getAllTopics = () => async (dispatch) => {
  try {
    const res = await api.get("/topic");
    dispatch({
      type: types.GET_ALL_TOPIC,
      payload: res.data.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const createTopic = (body) => async (dispatch) => {
  try {
    const res = await api.post("/topic", body);
    dispatch({
      type: types.CREATE_TOPIC,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const updateTopic = (id, allTopics) => async (dispatch) => {
  try {
    const res = await api.patch("/topic", body);
    dispatch({
      type: types.UPDATE_TOPIC,
      payload: res.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const deleteTopic = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/topic/${id}`);
    dispatch({
      type: types.DELETE_TOPIC,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
