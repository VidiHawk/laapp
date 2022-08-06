import React from "react";
import { Container, Row, Col } from "reactstrap";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const renderBubbles = () => {
  let bubbles = [];
  const items = [
    { icon: "rust", name: "Rust" },
    { icon: "lisp", name: "Lisp" },
    { icon: "tf", name: "Tensorflow" },
    { icon: "css", name: "CSS" },
    { icon: "git", name: "Git" },
    { icon: "html", name: "HTML" },
    { icon: "unreal", name: "Unreal Engine" },
    { icon: "cpp", name: "C++" },
    { icon: "python", name: "Python" },
    { icon: "numpy", name: "Numpy" },
    { icon: "react", name: "React" },
    { icon: "js", name: "JavaScript" },
    { icon: "gql", name: "GraphQL" },
    { icon: "docker", name: "Docker" },
    { icon: "eth", name: "Ethereum" },
  ];

  items.forEach((bubble, i) => {
    const iconSize =
      i % 4 === 0 ? "xl" : i % 3 === 0 ? "lg" : i % 2 === 0 ? "md" : "xxl";

    bubbles.push(
      <div
        key={i}
        className={`bubble bg-contrast rounded-circle p-2 shadow icon icon-${iconSize}`}
      >
        <img
          src={require(`assets/img/bubbles/${bubble.icon}.svg`)}
          alt=""
          className="img-responsive"
        />
        <span className="badge badge-contrast shadow-box">{bubble.name}</span>
      </div>
    );
  });

  return bubbles;
};

const Integration = () => {
  return (
    <section className="section integration-bubbles">
      <Container className="overflow-hidden">
        <Row>
          <Col md="6">
            <div className="bubbles-wrapper">
              <div className="animations m-0">{renderBubbles()}</div>
            </div>
          </Col>

          <Col md="6">
            <div className="section-heading">
              <p className="text-alternate text-uppercase bold">
                Excellence in coding
              </p>
              <h2 className="heading-line">Elegance and Performance</h2>
              <p className="lead text-muted">
                We live and dream in code. We blend stacks into exquisite
                recipes. Building, breaking and rebuilding to reach perfection.
              </p>
            </div>

            <MoreInfoButton text="Explore all integration" to="#!" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Integration;
