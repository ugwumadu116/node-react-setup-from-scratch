import React, { Component } from "react";
import "./app.scss";
import Header from "./components/header/headerComponent";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>kill joel webpack ready</h1>
      </div>
    );
  }
}

export default App;
