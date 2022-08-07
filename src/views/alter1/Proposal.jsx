import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proposal = () => {
  return (
    <section className="section our-proposal">
      <div className="shapes-container">
        <Fade bottom delay={300}>
          <div className="shape shape-circle pattern-dots" />
        </Fade>

        <Fade bottom>
          <div className="shape shape-circle shape-circle-fill" />
        </Fade>

        <div className="pattern pattern-dots" />
      </div>

      <Container className="bring-to-front">
        <Row className="align-items-center">
          <Col md="6" className="order-md-last">
            <figure
              className="mockup"
              style={{ width: "920px", maxWidth: "100%" }}
            >
              <img
                src={require("assets/img/screens/wmockup/1.png")}
                className="img-responsive"
                alt="..."
              />
            </figure>
          </Col>

          <Col md="6">
            <h2 className="heading-line">A user centric approach</h2>
            <p className="lead text-muted">
              We use first principle methodologies to engineers solutions that
              add value to the user. We write software that utilize the device's
              capabilities to the extreme. We maximize compute power while
              minimizing power consumption. We design algorithms that redefine
              the boundaries of what hardware can do!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Proposal;
