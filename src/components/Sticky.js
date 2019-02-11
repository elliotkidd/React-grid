import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Sticky = styled.div`
  position: sticky;
  top: ${props => props.top}rem;
`;

export default Sticky;
