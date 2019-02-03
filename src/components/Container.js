import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
  max-width: ${props => (props.wide ? "1400" : "1140")}px;
`;

export default Container;
