import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Section = styled.section`
  padding: ${props => props.space}rem 0;
  background-color: ${props => props.backgroundColor};
`;

export default Section;
