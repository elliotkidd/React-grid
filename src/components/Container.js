import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${props => (props.wide ? "1400" : "1140")}px;
`;

export default Container;
