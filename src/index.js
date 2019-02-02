import React from "react";
import ReactDOM from "react-dom";
import Row from "./components/Row";
import Column from "./components/Column";
import Container from "./components/Container";
import Box from "./components/Box";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column md={12}>
            <Box>Twelve</Box>
          </Column>
        </Row>
        <Row>
          <Column md={6}>
            <Box>Six</Box>
          </Column>
          <Column md={6}>
            <Box>Six</Box>
          </Column>
        </Row>
        <Row>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
        </Row>
        <Row>
          <Column md={3}>
            <Box>Three</Box>
          </Column>
          <Column md={3}>
            <Box>Three</Box>
          </Column>
          <Column md={3}>
            <Box>Three</Box>
          </Column>
          <Column md={3}>
            <Box>Three</Box>
          </Column>
        </Row>
        <Row>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
          <Column md={2}>
            <Box>Two</Box>
          </Column>
        </Row>
        <Row>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
          <Column md={1}>
            <Box>One</Box>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
