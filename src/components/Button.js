import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #4949e4;
  border: 1px solid #4949e4;
  color: #fff;
  padding: 0 1.4rem;
  text-align: center;
  margin: 0.5rem 0;
  border-radius: 3px;
  font-size: 0.875rem;
  line-height: calc(1rem * 3);
  transition: 200ms;

  &:hover {
    background-color: #000;
    cursor: pointer;
  }

  ${props =>
    props.sm &&
    css`
      padding: 0 1rem;
      line-height: calc(1rem * 2);
    `}
    ${props =>
    props.lg &&
    css`
      padding: 0 2rem;
      line-height: calc(1rem * 4);
    `}
`;

export default Button;
