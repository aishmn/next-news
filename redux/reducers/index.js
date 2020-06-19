import { combineReducers } from "redux";
import { postReducer } from "./postReducers";
import notification from "./notificationReducers";
import auth from "./authReducers";
import user from "./userReducers";
import news from "./newsReducers";
import category from "./categoryReducers";
import tag from "./tagReducers";
import topic from "./topicReducers";

export default combineReducers({
  post: postReducer,
  notification,
  auth,
  user,
  news,
  category,
  tag,
  topic,
});
