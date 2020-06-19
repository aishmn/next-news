import * as types from "../store/types";

const initialState = {
  tags: null,
  tag: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_TAG:
      return {
        ...state,
        tags: action.payload,
        tag: null,
        loading: false,
        error: null,
      };
    case types.CREATE_TAG:
    case types.UPDATE_TAG:
    case types.DELETE_TAG:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
}
