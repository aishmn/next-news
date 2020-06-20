import * as types from "../store/types";
import api from "../../lib/api";
import { setNotification } from "./notificationActions";

export const getAllNews = () => async (dispatch) => {
  try {
    const res = await api.get("/news");
    dispatch({
      type: types.GET_ALL_NEWS,
      payload: res.data.data.data,
    });
  } catch (err) {
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const createNews = (body) => async (dispatch) => {
  try {
    const res = await api.post("/news", JSON.stringify(body));
    dispatch({
      type: types.CREATE_NEWS,
      payload: res.data.data,
    });
    dispatch(setNotification("News Create, Create another"));
  } catch (err) {
    console.log(err.response);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const updateNews = (body, id, router) => async (dispatch) => {
  try {
    if (id) {
      const res = await api.patch(`/news/${id}`, JSON.stringify(body));
      dispatch({
        type: types.UPDATE_NEWS,
        payload: res.data.data,
      });
      dispatch(getAllNews());
      dispatch(setNotification("News Updated Succesfully"));
      router.push("/admin/news");
    }
  } catch (err) {
    if (err.response.data.message.message) {
      dispatch(setNotification(err.response.data.message.message));
    }
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
export const deleteNews = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/news/${id}`);
    dispatch({
      type: types.DELETE_NEWS,
      payload: res.data.data,
    });
    dispatch(setNotification("News deleted, proceed further"));
    dispatch(getAllNews());
  } catch (err) {
    console.log(err.response);
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};

export const getNewsBySlug = (slug) => async (dispatch) => {
  try {
    const res = await api.get(`/news/${slug}`);
    dispatch({
      type: types.GET_NEWS_BY_SLUG,
      payload: res.data.data.data,
    });
  } catch (err) {
    if (err.response.data.message.message) {
      return dispatch(setNotification(err.response.data.message.message));
    }
    if (err.response.data.message) {
      dispatch(setNotification(err.response.data.message));
    }
  }
};
