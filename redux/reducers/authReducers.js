import {
  LOAD_USER,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  LOAD_USER_FAILED,
} from "../store/types";

const initalState = {
  /* global localStorage */
  token:
    typeof localStorage === "undefined" ? null : localStorage.getItem("token"),
  is_authenticated: false,
  loading: true,
  user: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN:
    case LOAD_USER:
    case SIGNUP:
      return {
        ...state,
        is_authenticated: true,
        loading: false,
        user: payload,
      };
    case SIGNOUT:
    case LOAD_USER_FAILED:
      return { ...state, is_authenticated: false, loading: false, user: null };

    default:
      return state;
  }
}
