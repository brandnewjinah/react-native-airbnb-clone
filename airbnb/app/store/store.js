import { createStore, applyMiddleware } from "redux";
// import search from "./search";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

// const initialStore = {
//   city: "",
//   startDay: "",
//   endDay: "",
//   adult: 0,
//   child: 0,
//   infant: 0,
// };

const middleware = [thunk];

const store = createStore(
  rootReducer,
  // initialStore,
  applyMiddleware(...middleware)
);

export default store;
