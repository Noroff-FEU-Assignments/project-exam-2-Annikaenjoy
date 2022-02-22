import React from "react";

// React Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Images
import Ares from "../assets/images/Ares_piri.png";
import Barez from "../assets/images/Barez_piri.png";
import Vegard from "../assets/images/vegardengoy.png";

const Team = () => {
  return (
    <>
      <h2 className="contact_h2">Kontakt oss</h2>
      <Container className="team-container">
        <Row className="justify-content-md-center">
          <Col className="team-col" md={3}>
            <img className="profile_pic" src={Ares} />
            <h4 className="title">Partner / Selger</h4>
            <h3>Ares Piri</h3>
            <p>
              + 47 476 87 754
              <br />
              Ares@autonxt.com
            </p>
          </Col>
          <Col className="team-col" md={3}>
            <img className="profile_pic" src={Barez} />
            <h4 className="title">Partner / Selger</h4>
            <h3>Barez Piri</h3>
            <p>
              + 47 463 18 355
              <br />
              Barez@autonxt.com
            </p>
          </Col>
          <Col className="team-col" md={3}>
            <img className="profile_pic" src={Vegard} />
            <h4 className="title">Markedsansvarlig / Selger</h4>
            <h3>Vegard Engøy</h3>
            <p>
              +47 907 87 977 <br />
              Vegard@autonxt.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
