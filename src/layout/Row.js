import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Row = styled.div`
  margin: 0 -0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  text-align: ${props => props.textAlign};
`;

export default Row;
