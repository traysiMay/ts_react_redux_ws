import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducers, { RootState, Action } from "./reducers";

const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)
);

export default store;
