import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import PropertyListing from "./pages/PropertyListing";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PropertyListing />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
