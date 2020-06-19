import * as types from "../store/types";

const initialState = {
  all_news: null,
  news: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      return {
        ...state,
        all_news: action.payload,
        news: null,
        loading: false,
        error: null,
      };
    case types.CREATE_NEWS:
    case types.UPDATE_NEWS:
    case types.DELETE_NEWS:
      return {
        ...state,
        all_news: action.payload,
        news: null,
        loading: false,
        error: null,
      };
    case types.GET_NEWS_BY_SLUG:
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
