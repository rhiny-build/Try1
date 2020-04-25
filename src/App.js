import React from "react";
import { Input } from "./Input";

import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h2Value: "Start editing to see some magic happen!"
    };
    this.handleUserChange = this.handleUserChange.bind(this);
  }
  handleUserChange(e) {
    this.setState({ h2Value: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <Input onClick={this.handleUserChange} />
        <h1>Hello CodeSandbox</h1>
        <h2>{this.state.h2Value}</h2>
      </div>
    );
  }
}
