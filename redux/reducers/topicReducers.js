import * as types from "../store/types";

const initialState = {
  topics: null,
  topic: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_TOPIC:
      return {
        ...state,
        topics: action.payload,
        topic: null,
        loading: false,
        error: null,
      };
    case types.CREATE_TOPIC:
    case types.UPDATE_TOPIC:
    case types.DELETE_TOPIC:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
}
