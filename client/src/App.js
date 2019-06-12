import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my test app</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
