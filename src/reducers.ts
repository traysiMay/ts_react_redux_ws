import { CONNECTING, CONNECTED } from "./actions";

export type RootState = {
  connected: boolean;
  readyState: number;
  socket: WebSocket | null;
};

export type SocketPayload = {
  socket: any;
};

export type Action<T> = {
  type: string;
  payload: T;
};

const initialState: RootState = {
  connected: false,
  readyState: 0,
  socket: null
};

const reducer = (
  state: RootState = initialState,
  action: Action<SocketPayload>
) => {
  switch (action.type) {
    case CONNECTING:
      const { socket } = action.payload;
      return { ...state, readyState: 1, socket };
    case CONNECTED:
      return { ...state, readyState: 2, connected: true };
    default:
      return state;
  }
};

export default reducer;
