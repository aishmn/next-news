import * as types from "../store/types";

const initialState = {
  users: null,
  user: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.GET_ALL_USERS:
    case types.DELETE_USER:
      return { ...state, users: action.payload, loading: false };
    case types.GET_USER_BY_ID:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}
