import { CONNECTING, CONNECTED } from "./actions";

export type RootState = {
  connected: boolean;
  readyState: number;
  socket: any;
};

export type Action = {
  type: string;
  payload?: object;
};

const initialState: RootState = {
  connected: false,
  readyState: 0,
  socket: null
};

const reducer = (state: RootState = initialState, action: Action) => {
  switch (action.type) {
    case CONNECTING:
      return { ...state, readyState: 1 };
    case CONNECTED:
      return { ...state, readyState: 2, connected: true };
    default:
      return state;
  }
};

export default reducer;
