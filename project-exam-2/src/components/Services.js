import React from "react";
import { useNavigate } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Images
import Car1 from "../assets/images/car1.jpg";
import Car2 from "../assets/images/car2.jpg";
import Car3 from "../assets/images/car3.jpg";

const OurServices = (props) => {
  let navigate = useNavigate();
  const navigateCars = () => {
    navigate("/biler");
  };
  const navigateServices = () => {
    navigate("/tjenester");
  };
  const navigateOrder = () => {
    navigate("/bestilling");
  };
  return (
    <>
      <Container className="services_container" fluid="md">
        <h2>Våre tjenester</h2>
        <Row>
          <Col md={4} onClick={navigateCars}>
            <Card className="bg-dark text-white">
              <Card.Img src={Car3} alt="Card image" />
              <Card.ImgOverlay>
                <h4>Våre biler</h4>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} onClick={navigateServices}>
            <Card className="bg-dark text-white">
              <Card.Img src={Car1} alt="Card image" />
              <Card.ImgOverlay>
                <h4>Tjenester</h4>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} onClick={navigateOrder}>
            <Card className="bg-dark text-white">
              <Card.Img src={Car2} alt="Card image" />
              <Card.ImgOverlay>
                <h4>Bestillinger</h4>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurServices;
