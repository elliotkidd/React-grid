import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Row = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export default Row;
