import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Column = styled.div`
  width: ${props => (props.md ? (props.md / 12) * 100 : "100%")}%};
  padding: 0 0.5rem;
`;

export default Column;
