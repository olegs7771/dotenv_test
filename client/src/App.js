import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

function App() {
  console.log("store", store);
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my test app with Redux_env</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
