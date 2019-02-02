import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid";
import Column from "./components/Column";
import Container from "./components/Container";
import Box from "./components/Box";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid>
          <Column md={12}>
            <Box>Twelve</Box>
          </Column>
        </Grid>
        <Grid>
          <Column md={6}>
            <Box>Six</Box>
          </Column>
          <Column md={6}>
            <Box>Six</Box>
          </Column>
        </Grid>
        <Grid>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
          <Column md={4}>
            <Box>Four</Box>
          </Column>
        </Grid>
        <Grid>
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
        </Grid>
        <Grid>
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
        </Grid>
        <Grid>
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
        </Grid>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
