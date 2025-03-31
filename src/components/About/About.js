import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";

function About() {
  // For slide-in animation (optional)
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Copy the current ref value to a local variable
    const currentImage = imageRef.current;
    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        {/* About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong>I Am</strong>
            </h1>
            <Aboutcard />
          </Col>

          {/* Slide-in Image Section */}
          <Col
            md={5}
            ref={imageRef}
            className="about-img slide-in-right"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "100px",
              marginTop: "-20px",
            }}
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{
                maxWidth: "80%", // Adjust to control image size
                borderRadius: "8px", // Rounded corners
              }}
            />
          </Col>
        </Row>

        {/* Skillset Section */}
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* Contact Form Section */}
      </Container>
    </Container>
  );
}

export default About;
