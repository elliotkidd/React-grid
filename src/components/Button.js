import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #4949e4;
  border: 1px solid #4949e4;
  color: #fff;
  padding: 0 1rem;
  text-align: center;
  border-radius: 3px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: calc(1rem * 2.4);
  transition: 200ms;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    background-color: #3a3ab6;
    border: 1px solid #3a3ab6;
    
  };

  &:focus {
    outline: 0;
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${props =>
    props.primary &&
    css`
      background-color: #4949e4;
      border: 1px solid #4949e4;
      &:hover {
        background-color: #3a3ab6;
        border: 1px solid #3a3ab6;
        cursor: pointer;
      }
    `}
  ${props =>
    props.primaryOutline &&
    css`
      background-color: transparent;
      color: #4949e4;
      border: 1px solid #4949e4;
      &:hover {
        background-color: #3a3ab6;
        color: #fff;
        border: 1px solid #3a3ab6;
        cursor: pointer;
      }
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: #ff5c61;
      border: 1px solid #ff5c61;
      &:hover {
        background-color: #cc494d;
        border: 1px solid #cc494d;
      }
    `}
  ${props =>
    props.secondaryOutline &&
    css`
      background-color: transparent;
      color: #ff5c61;
      border: 1px solid #ff5c61;
      &:hover {
        background-color: #cc494d;
        color: #fff;
        border: 1px solid #cc494d;
      }
    `}  
  ${props =>
    props.tertiary &&
    css`
      background-color: #37c2d9;
      border: 1px solid #37c2d9;
      &:hover {
        background-color: #2c9bad;
        border: 1px solid #2c9bad;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(#37c2d9, 0.25);
      }
    `} 
  ${props =>
    props.tertiaryOutline &&
    css`
      background-color: transparent;
      color: #37c2d9;
      border: 1px solid #37c2d9;
      &:hover {
        background-color: #2c9bad;
        color: #fff;
        border: 1px solid #2c9bad;
      }
    `}
  ${props =>
    props.dark &&
    css`
      background-color: #000d47;
      border: 1px solid #000d47;
      &:hover {
        background-color: #00082e;
        border: 1px solid #00082e;
      }
    `} 
  ${props =>
    props.darkOutline &&
    css`
      background-color: transparent;
      color: #000d47;
      border: 1px solid #000d47;
      &:hover {
        background-color: #00082e;
        color: #fff;
        border: 1px solid #00082e;
      }
    `}        

  ${props =>
    props.sm &&
    css`
      padding: 0 0.5rem;
      line-height: calc(1rem * 1.75);
    `}
    ${props =>
      props.lg &&
      css`
        padding: 0 1.25rem;
        line-height: calc(1rem * 3.25);
      `}

    
`;

export default Button;
