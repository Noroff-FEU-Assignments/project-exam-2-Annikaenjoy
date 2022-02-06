import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Image
import Trygghet from "../assets/images/Icons/Trygghet.png";
import Forsikring from "../assets/images/Icons/Forsikring.png";
import Finansiering from "../assets/images/Icons/Finansiering.png";
import Innbytte from "../assets/images/Icons/Innbytte.png";

const IconColumns = (props) => {
  return (
    <>
      <Container className="icon_container" fluid="md">
        <Row>
          <Col md={3} className="icon_col">
            <img className="icon" src={Trygghet} alt="" />
            <h3>Trygghet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md={3} className="icon_col">
            <img className="icon" src={Forsikring} alt="" />

            <h3>Forsikring</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md={3} className="icon_col">
            <img className="icon" src={Finansiering} alt="" />

            <h3>Finansiering</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md={3} className="icon_col">
            <img className="icon" src={Innbytte} alt="" />

            <h3>Innbytte og salg</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IconColumns;
