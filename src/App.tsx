import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import EnterInfoPage from "./pages/EnterInfoPage";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <h1 className="title">월급 루팡 계산기</h1>
          <EnterInfoPage />
        </div>
      </div>
    );
  }
}

export default App;
