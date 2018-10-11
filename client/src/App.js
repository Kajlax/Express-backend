import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Bears from "./components/bears/Bears";
import { Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <br />
          <Header
            as="h1"
            content="Bear Express backend"
            subheader="Fetching bears from Express.js backend"
            dividing
          />
          <br />
          <Bears />
        </div>
      </div>
    );
  }
}

export default App;
