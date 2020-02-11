import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";


export default function PhotoSection({slide,...props}) {
 return (
  
    <div className="section" id="carousel">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" md="12">
            <img src={slide.url} alt={slide.altText} />
          </Col>
          </Row>
      </Container>
    </div>
 )
 }
