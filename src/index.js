import React from "react";
import ReactDOM from "react-dom";
import { Row, Column, Container, Section } from "./layout/Layout";
import Box from "./components/Box";
import Button from "./components/Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Section>
        <Container narrow>
          <Row>
            <Column md={12}>
              <Button primary>This is a button</Button>
              <Button secondary>This is a button</Button>
              <Button tertiary>This is a button</Button>
            </Column>
          </Row>
          </Container>
      </Section>
      <Section>
        <Container narrow>
          <Row>
            <Column md={12}>
              <Button primaryOutline>This is a button</Button>
              <Button secondaryOutline>This is a button</Button>
              <Button tertiaryOutline>This is a button</Button>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container narrow>
          <Row>
            <Column md={12}>
              <Box>Twelve</Box>
            </Column>
          </Row>
          <Row>
            <Column sm={6}>
              <Box>Six</Box>
            </Column>
            <Column sm={6}>
              <Box>Six</Box>
            </Column>
          </Row>
          <Row>
            <Column sm={6} md={4}>
              <Box>Four</Box>
            </Column>
            <Column md={4} xs={6}>
              <Box>Four</Box>
            </Column>
            <Column md={4} xs={6}>
              <Box>Four</Box>
            </Column>
          </Row>
          <Row>
            <Column lg={3}>
              <Box>Three</Box>
            </Column>
            <Column lg={3}>
              <Box>Three</Box>
            </Column>
            <Column lg={3}>
              <Box>Three</Box>
            </Column>
            <Column lg={3}>
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
      </Section>

      <Section>
        <Container narrow>
          <Row alignItems="center" justifyContent="space-between">
            <Column md={5}>
              <h2>Tab One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Column>
            <Column md={6}>
              <Box>
                <img src="https://source.unsplash.com/random/800x600" />
              </Box>
            </Column>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
