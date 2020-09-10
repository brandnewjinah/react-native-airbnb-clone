import { combineReducers } from "redux";
import search from "./search";
import host from "./host";

export default combineReducers({
  search,
  host,
});
