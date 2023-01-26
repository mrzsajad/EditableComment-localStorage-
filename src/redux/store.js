import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { posts } from "./reducer";

const reducer = combineReducers({ posts });
const middleware = [thunk];

// //step4
// const data = JSON.parse(localStorage.getItem("posts"));

//step 7
const data = JSON.parse(localStorage.getItem("posts"))
  ? JSON.parse(localStorage.getItem("posts"))
  : [];

// //step 2
// const initialState={}

//step5
const initialState = { posts: { data: [...data], loading: false, error: "" } };

//step3
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
