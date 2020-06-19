import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from "../store/types";

const initalState = {
  message: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTIFICATION:
      return { ...state, message: payload };
    case REMOVE_NOTIFICATION:
      return { ...state, message: null };
    default:
      return state;
  }
}
