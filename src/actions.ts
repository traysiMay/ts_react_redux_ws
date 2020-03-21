import { Action } from "redux";
import { RootState } from "./reducers";
import { ThunkAction } from "redux-thunk";
import io from "socket.io-client";
export const CONNECTING = "CONNECTING";
export const CONNECTED = "CONNECTED";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

interface SocketConnected {
  connected: boolean;
}

export const connectSocket = (): AppThunk => async dispatch => {
  dispatch({ type: CONNECTING });
  const socket = io(process.env.REACT_APP_SERVER as string);
  socket.on(CONNECTED, (connected: SocketConnected) => {
    if (connected) {
      dispatch({ type: CONNECTED });
    }
  });
};
