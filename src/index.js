import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid";
import Column from "./components/Column";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Grid justifyContent="center">
        <Column md="6">Test</Column>
      </Grid>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
