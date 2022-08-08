import React from "react";
import { Container, Row, Col } from "reactstrap";

const renderFeatures = () => {
  let features = [];
  const elements = [
    {
      icon: "pe-7s-science",
      title: "Artificial Intelligence",
      description:
        "We work on unresolved AI problems by designing new neural networks and reinventing methodologies.",
    },
    {
      icon: "pe-7s-graph1",
      title: "Fintech",
      description:
        "Our research aims to develop new algorithms that push the boundaries in terms if speed and security.",
    },
    {
      icon: "pe-7s-monitor",
      title: "Media Rendering",
      description:
        "We build 3D data processors, 3D rendering engines, video transcoding and streaming algorithms.",
    },
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="4" className="py-4 rounded shadow-hover" key={"feature" + i}>
        <i className={`pe ${element.icon} pe-3x mb-3 blue-primary`} />
        <h5 className="bold">{element.title}</h5>
        <p>{element.description}</p>
      </Col>
    );
  });

  return features;
};

const Features = () => {
  return (
    <section id="features" className="section features">
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Laser focused</h2>
          <p className="lead text-muted">
            Our engineering team is passionate about solving complex problems
            that have the potential to generate a lasting net positive impact on
            society. We are training neural networks to recognize abstract
            concepts, and pushing the boundaries of cognitive AI systems.
          </p>
        </div>

        <Row className="gap-y text-center text-md-left">{renderFeatures()}</Row>
      </Container>
    </section>
  );
};

export default Features;
