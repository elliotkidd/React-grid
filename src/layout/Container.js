import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
  max-width: 1140px;

  ${props =>
    props.wide &&
    css`
      max-width: 1400px;
    `}
  ${props =>
    props.narrow &&
    css`
      max-width: 70rem;
    `}
  
  }
`;

export default Container;
