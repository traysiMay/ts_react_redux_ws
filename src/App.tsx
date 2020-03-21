import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { RootState } from "./reducers";

function App(state: RootState) {
  if (state.readyState === 1) {
    return <div>connecting...</div>;
  }
  if (state.readyState === 2 && state.connected === true) {
    return <div>connected</div>;
  }
  return <div className="App">This is the app</div>;
}

const mapStateToProps = (state: RootState) => state;

export default connect(mapStateToProps)(App);
