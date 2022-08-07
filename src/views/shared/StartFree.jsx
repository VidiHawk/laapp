import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const renderIcons = () => {
  let icons = [];
  const items = [
    { icon: "7s-hourglass", prefix: "pe" },
    { icon: "7s-magic-wand", prefix: "pe" },
    { icon: "7s-rocket", prefix: "pe" },
    { icon: "7s-plugin", prefix: "pe" },
    { icon: "7s-like", prefix: "pe" },
    { icon: "7s-clock", prefix: "pe" },
    { icon: "7s-smile", prefix: "pe" },
    { icon: "7s-piggy", prefix: "pe" },
    { icon: "7s-shield", prefix: "pe" },
    { icon: "7s-server", prefix: "pe" },
  ];
  items.forEach((icon, i) => {
    icons.push(
      <i
        className={`icon ${icon.prefix} ${i.prefix}-${icon.icon} ${icon.prefix}-3x`}
        key={i}
      />
    );
  });

  return icons;
};

const particlesInit = async (main) => {
  await loadFull(main);
};

const particlesOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#808080",
    },
    shape: {
      type: "circle",
      options: {
        sides: 2,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ["repulse"],
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 150,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#ffffff",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

const StartFree = () => {
  return (
    <section className="section start-free" id="contact">
      <div className="tsparticles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      <div className="shapes-container">{renderIcons()}</div>
      <Container className="get-in-touch">
        <Row>
          <Col md="6" className="mx-auto">
            <div className="section-heading text-center">
              <i className="pe pe-7s-mail fa-3x text-alternate" />
              <h2 className="heading-line bold mt-4">Want to get in touch?</h2>
              <p className="lead text-muted">
                If you want to collaborate or work with us, drop us a note.
                Let's make it happen!
              </p>
            </div>
          </Col>
        </Row>

        <div className="nav flex-column flex-md-row align-items-center justify-content-center">
          {/* <Link
            to="#!"
            className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0"
          >
            Sign up
          </Link> */}
          <Link
            to="mailto:info@vidiren.com"
            className="btn btn-alternate btn-lg py-3 px-4 bold"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StartFree;
