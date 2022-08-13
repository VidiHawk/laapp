import React from "react";
import { Container, Row, Col } from "reactstrap";
import PowerfulCard from "./PowerfulCard.jsx";
// import MoreInfoButton from "components/MoreInfoButton.jsx";

const createCards = (use) => {
  let features = [];
  let cards = [
    {
      class: "mt-6 mt-6 mx-lg-auto",
      icon: "edit",
      title: "Customizable",
      animation: { delay: 0 },
      description:
        "Every business can now create their own video commerce site",
    },

    {
      class: "mx-lg-auto",
      icon: "light",
      title: "Intuitive",
      animation: { delay: 800 },
      description: "The most natural way for a user to shop online",
    },

    {
      class: "mr-lg-auto",
      icon: "phone",
      title: "Mobile-first",
      animation: { delay: 500 },
      description: "Truly designed for mobile, reinventing shopping",
    },

    {
      class: "mt-6n mr-lg-auto",
      icon: "rocket",
      title: "Speed",
      animation: { delay: 1200 },
      description: "It loads super fast, even on poor Internet connections",
    },
  ];

  cards.forEach((el, i) => {
    if (i % 2 === use) {
      features.push(<PowerfulCard {...el} key={i} />);
    }
  });

  return features;
};

const PowerfulFeatures = () => {
  return (
    <section className="section alter3-features" id="product">
      <div className="shapes-container">
        <div className="shape shape-ring shape-ring-1">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-ring shape-ring-2">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-circle animation--clockwise">
          <div />
        </div>

        <div className="shape background-shape-main" />
      </div>

      <Container>
        <Row>
          <Col lg="5" className="order-lg-last" id="product">
            <div className="section-heading">
              <p className="px-2 text-alternate text-uppercase bold">
                The future of online shopping
              </p>
              <h2 className="heading-line">Vidi Commerce™</h2>

              <p className="lead text-muted my-4 semi-bold">
                The first video website builder in the world
              </p>

              <p>
                Imagine a website in your browser where each page is a
                full-screen video. You can navigate by swiping through videos,
                and tap to add products to your cart{" "}
              </p>

              {/* <MoreInfoButton
                className="btn btn-alternate text-contrast bold"
                text="Know More"
                to="https://www.vidicommerce.com/"
              /> */}
              <a
                href="https://www.vidicommerce.com/"
                className="more-link btn btn-alternate text-contrast bold"
              >
                Learn More
              </a>
            </div>
          </Col>

          <Col lg="7" className="pr-lg-6 ">
            <Row>
              <Col lg="6" className="rotated-cards">
                {createCards(0)}
              </Col>
              <Col lg="6" className="rotated-cards">
                {createCards(1)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
