import * as types from "../store/types";
export const setNotification = (message) => async (dispatch) => {
  dispatch({
    type: types.SET_NOTIFICATION,
    payload: message,
  });
};

export const removeNotification = () => async (dispatch) => {
  dispatch({
    type: types.REMOVE_NOTIFICATION,
  });
};
