import { useState } from "react";
import "./App.css";
import store from "./redux";
import Counter from "./counter";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  );
}

export default App;
