import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = (props) => {
  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col xs={6} md={{ span: 3, offset: 1 }}>
              <h6>Produkter og tjenester</h6>
              <p>Våre biler</p>
              <p>Tjenester</p>
              <p>Bestilpng</p>
              <p>Innbytte</p>
              <p>Kommisjon</p>
              <p>Finansiering</p>
            </Col>
            <Col xs={6} md={{ span: 3, offset: 1 }}>
              <h6>Kontakt oss</h6>
              <p>
                Daneljordet 12, <br />
                8656 Mosjøen
              </p>
              <p>
                Ares@autonxt.com <br />+ 47 476 87 754{" "}
              </p>
              <p>
                {" "}
                Barez@autonxt.com <br />+ 47 463 18 355{" "}
              </p>
              <p>
                Vegard@autonxt.com <br />+ 47 907 87 977
              </p>
            </Col>
            <Col xs={12} md={{ span: 3, offset: 1 }}>
              <h6>Sosiale media</h6>
              <FiFacebook className="fi_icon1" />
              <FiInstagram className="fi_icon2" />
              <FiLinkedin className="fi_icon3" />
            </Col>
          </Row>
        </Container>
        <Container fluid className="line">
          <Row>
            <Col className="footer_devline">
              {" "}
              <p>Kjøpsbetingelser | Personvern | Administrer cookies </p>
            </Col>
            <Col className="copyright">
              Copyright © 2022 AUTONXT AS |  Website developed by Annika Engøy{" "}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
