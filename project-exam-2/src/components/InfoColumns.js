import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

// Images
import ColImg1 from "../assets/images/ColImg1.jpg";

const InfoColumns = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="Col1">
            <div className="col_content">
              <h2>Om oss</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="btn_black">Kontakt oss</button>
            </div>
          </Col>
          <Col xs={12} md={6} className="Col2">
            <div className="col_content">
              <h2 className="bestilling_h2">Bestilling</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn_white">Les mer</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoColumns;
