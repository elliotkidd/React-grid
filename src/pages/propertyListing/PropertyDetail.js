import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Row, Column, Container, Section } from "../../layout/Layout";

const PropertyType = styled.h3`
  margin: 0;
`;

const PropertyStatus = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #767676;
`;

function PropertyDetail({ type, status, bed, bath, car }) {
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Column xs={6}>
        <PropertyType>{type}</PropertyType>
        <PropertyStatus>{status}</PropertyStatus>
      </Column>
      <Column xs={2} textAlign="center">
        {bed} Bed
      </Column>
      <Column xs={2} textAlign="center">
        {bath} Bath
      </Column>
      <Column xs={2} textAlign="center">
        {car} Car
      </Column>
    </Row>
  );
}
export default PropertyDetail;
