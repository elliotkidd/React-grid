import React from "react";
import { Row, Column, Container, Section } from "../layout/Layout";
import Box from "../components/Box";
import Button from "../components/Button";
import Sticky from "../components/Sticky";
import PropertyDetail from "./propertyListing/PropertyDetail";
import PropertyHeader from "./propertyListing/PropertyHeader";
import {
  Title,
  SubTitle,
  Lead,
  Small,
  LineBreak
} from "../typography/Typography";
import "../styles.css";

function PropertyListing() {
  return (
    <React.Fragment>
      <PropertyHeader title="House and land" location="Under construction" />
      <Section>
        <Container>
          <Row justifyContent="space-between">
            <Column md={8}>
              <img src="https://source.unsplash.com/random/1920x1080" />
              <Section space={2}>
                <PropertyDetail
                  type="House and land"
                  status="Under construction"
                  bed={1}
                  bath={1}
                  car={1}
                />
              </Section>
              <LineBreak />
              <Section>
                <h2>About this property</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem Ipsum Dolor Sit Amet Consectetur A Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Donec elementum ligula eu
                  sapien consequat eleifend. Donec nec dolor erat, condimentum
                  sagittis sem.
                </p>
                <p>
                  Praesent porttitor porttitor risus, dapibus rutrum ipsum
                  gravida et. Integer lectus nisi, facilisis sit amet eleifend
                  nec, pharetra ut augue. Integer quam nunc, consequat nec
                  egestas ac, volutpat ac nisi.
                </p>
              </Section>
              <LineBreak />
              <Section>
                <h2>Location</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Section>
            </Column>
            <Column md={4}>
              <Sticky top={7}>
                <Box>
                  <Row>
                    <Column xs={6}>
                      <span>Price</span>
                      <h2>$663,000</h2>
                    </Column>
                    <Column xs={6}>
                      <span>Rebate</span>
                      <h2>$35,000</h2>
                    </Column>
                  </Row>
                  <Button primary block>
                    Express your interest
                  </Button>
                  <Small>You won’t be charged yet</Small>
                  <LineBreak />
                  <Small>
                    Abodable.com.au passes the rebate amount back to you, the
                    buyer.
                  </Small>
                  <Button darkOutline block>
                    Add to wishlist
                  </Button>
                </Box>
              </Sticky>
            </Column>
          </Row>
        </Container>
      </Section>
    </React.Fragment>
  );
}

export default PropertyListing;
