import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutPage() {
  return (
    <Container className="mt-5" style={{ maxWidth: "800px" }}>
      {/* ABOUT ME SECTION */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontWeight: "bold" }}>ABOUT ME</h1>
          <hr
            style={{
              width: "60px",
              margin: "1rem auto",
              border: "2px solid #000",
            }}
          />
          <p>
            Hello, I’m <strong>Soham Patel</strong> — a passionate tech enthusiast
            currently pursuing a Master’s in Information Technology at Arizona State University.
            I thrive on building solutions that merge creativity with functionality.
          </p>
        </Col>
      </Row>

      {/* GET TO KNOW ME SECTION */}
      <Row className="text-center">
        <Col>
          <h2>Get to know me!</h2>
          <p className="mt-3">
            I’m a hands-on learner who loves exploring new technologies, collaborating on interesting projects, and staying up to date with the latest trends. My goal is to make a positive impact through innovation and problem-solving.
          </p>
          {/* Social Icons */}
          <ul
            className="social-icons"
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {/* Mail button has been removed */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
