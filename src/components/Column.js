import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Column = styled.div`
  position: relative;
  width: ${props => (props.xs ? (props.xs / 12) * 100 : "100")}%};
  padding: 0 0.5rem;
  width: 100%;
  flex-wrap: wrap;

  ${props =>
    props.sm &&
    css`
      @media (min-width: 576px) {
        width: ${props => (props.sm ? (props.sm / 12) * 100 : "100")}%};
      }
    `}
  

  @media (min-width: 768px) {
    ${props =>
      props.md &&
      css`
        width: ${props => (props.md ? (props.md / 12) * 100 : "100")}%};
      `}
  }

  @media (min-width: 992px) {
    ${props =>
      props.lg &&
      css`
        width: ${props => (props.lg ? (props.lg / 12) * 100 : "100")}%};
      `}
  }

  @media (min-width: 1200px) {
    ${props =>
      props.xl &&
      css`
        width: ${props => (props.xl ? (props.xl / 12) * 100 : "100")}%};
      `}
  }
`;

export default Column;
