import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import EnterInfoPage from "./pages/EnterInfoPage";
import DropdownExampleControlled from "./components/test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> 계산기</div>
        <EnterInfoPage />
      </div>
    );
  }
}

export default App;
