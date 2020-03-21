import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducers, { RootState, Action, SocketPayload } from "./reducers";

const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<RootState, Action<SocketPayload>>)
);

export default store;
