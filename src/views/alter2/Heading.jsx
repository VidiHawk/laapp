import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const shapes = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },

  { duration: 500, delay: 200 },
  { duration: 500, delay: 200 },

  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },

  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
];

const Heading = () => {
  return (
    <header className="header alter2-header section" id="home">
      <div className="shapes-container">
        {/* diagonal shapes */}
        {shapes.map((shape, i) => (
          <Fade bottom key={"fade" + i}>
            <div
              className="shape shape-animated shape-diagonal"
              duration={shape.duration}
              delay={shape.delay}
            />
          </Fade>
        ))}

        {/* animated shapes */}
        <div className="animation-shape shape-ring animation--clockwise" />
        <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
        <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
        <div className="animation-shape shape-heart animation--clockwise">
          <div className="animation--rotating" />
        </div>

        <div className="animation-shape shape-triangle animation--rotating-diagonal">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>

        {/* static shapes */}
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />

        <div className="static-shape shape-circle shape-circle-1">
          <Fade top right>
            <div />
          </Fade>
        </div>

        <div className="static-shape shape-circle shape-circle-2">
          <Fade top right delay={500}>
            <div />
          </Fade>
        </div>

        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />

        {/*  main shape */}
        <div className="static-shape background-shape-main" />

        {/*  ghost shapes */}
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <Container>
        <Row>
          <Col md="6">
            {/* <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <FontAwesomeIcon
                icon={["far", "lightbulb"]}
                className="text-primary mr-2"
              />
              <span className="text-primary">Awesome</span> Landing Page
            </span> */}

            <h1 className="display-4 display-md-2 mt-1">
              <span className="bold">Vidiren</span>
            </h1>
            <p className="lead bold text-primary">
              Shaping the flow of electrons &nbsp;
              <span className="head-line-2">
                to advance information technologies
              </span>
            </p>

            <p className="lead">
              Vidi Rendering Technologies is a team focused on artificial
              intelligence, fintech and media rendering.
            </p>

            <nav className="nav my-6">
              <a
                href="mailto:info@vidiren.com"
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
              >
                Contact us{" "}
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
              {/* <a
                href="#demos"
                className="btn btn-rounded btn-outline-alternate scrollto"
              >
                Free trial
              </a> */}
            </nav>
          </Col>

          <Col md="5">
            {/* <div className="renata">
              <img
                src={require("assets/img/screens/app/video.png")}
                alt="Vidiren video commerce"
              />
            </div> */}
            <div className="iphone-x front mx-auto">
              <div className="screen shadow-box">
                <img
                  src={require("assets/img/screens/app/rena.jpg")}
                  alt="..."
                />
              </div>
              {/* <div className="notch" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
