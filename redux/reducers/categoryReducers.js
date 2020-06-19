import * as types from "../store/types";

const initialState = {
  categories: null,
  category: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        news: null,
        loading: false,
        error: null,
      };

    case types.UPDATE_CATEGORY:
    case types.DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case types.CREATE_CATEGORY:
    default:
      return state;
  }
}
