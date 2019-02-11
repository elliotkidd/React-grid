import React from "react";
import styled from "styled-components";
import { Row, Column, Container, Section } from "../../layout/Layout";

const PropertyTitle = styled.h1`
  margin: 0 0 0.5rem 0;
`;

const PropertyLocation = styled.span`
  margin: 0;
  color: #767676;
`;

const StyledPropertyHeader = styled.div`
  margin: 0;
`;

const PropertyHeader = ({ title, location }) => (
  <Section space={2}>
    <Container>
      <Row>
        <Column>
          <PropertyTitle>{title}</PropertyTitle>
          <PropertyLocation>{location}</PropertyLocation>
        </Column>
      </Row>
    </Container>
  </Section>
);
export default PropertyHeader;
