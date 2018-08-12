import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "material-ui/AppBar";
import Particles from "react-particles-js";
import Modal1 from "./Modal1";
import RaisedButton from "material-ui/RaisedButton";
import Catch from "./Catch";
import Fetch from "./Fetch";

const style = {
  margin: 20
};
const pariclesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <Particles className="particles" params={pariclesOptions} />
        <AppBar
          title="PDS Chain"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <Fetch />
          <Catch />
        </AppBar>

        <Modal1 className="main" />
      </div>
    );
  }
}

export default App;
