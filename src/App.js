import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import NavBar from "./components/NavBar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header" />
            <NavBar />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
