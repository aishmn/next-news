import * as types from "../store/types";
import api from "../../lib/api";
import { setNotification } from "./notificationActions";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get("/users");

    dispatch({
      type: types.GET_ALL_USERS,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const createUser = (body) => async (dispatch) => {
  try {
    const res = await api.post("/users", body);

    dispatch({
      type: types.CREATE_USER,
      payload: res.data.user,
    });
    dispatch(setNotification("User Created Succesfully"));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const updateUser = (body, id) => async (dispatch) => {
  try {
    const res = await api.patch(`/users/${id}`, body);
    const user = res.data.data.data;

    dispatch({
      type: types.UPDATE_USER,
      payload: user,
    });
    dispatch(setNotification("User Succesfully Updated"));
  } catch (err) {
    console.log(err);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const deleteUser = (id, users) => async (dispatch) => {
  try {
    await api.delete(`/users/${id}`);
    const filteredUsers = users.filter((user) => user._id !== id);
    dispatch({
      type: types.DELETE_USER,
      users: filteredUsers,
    });
    dispatch(setNotification("User Deleted Succesfully"));
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${id}`);
    dispatch({
      type: types.GET_USER_BY_ID,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log(err.response);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
