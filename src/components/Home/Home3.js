import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bisag from "../../Assets/Bisag-n.PNG"; 
import Adani from "../../Assets/Adani.PNG"
function Home3() {
  return (
    <Container
      fluid
      style={{
        marginTop: "10rem",    // Extra top spacing 
        marginBottom: "4rem",  // Extra bottom spacing
        textAlign: "center",   // Centers the main heading
      }}
    >
      {/* Main Heading */}
      <Row>
        <Col md={12}>
          <h2 style={{ fontWeight: "bold" }}>
            Here’s what coworkers say about me!{" "}
            <span role="img" aria-label="eyes">
              👀
            </span>
          </h2>
        </Col>
      </Row>

      {/* Feedback #1: Logo left, text right */}
      <Row style={{ marginTop: "3rem", alignItems: "center" }}>
        <Col
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Bisag}
            alt="BISAG Logo"
            style={{ maxWidth: "80%", height: "auto" }}
          />
          <p style={{ marginTop: "1rem", fontWeight: "bold", textAlign: "center" }}>
            Software Engineer Intern – AI / ML
          </p>
        </Col>
        <Col md={8}>
          <h5
            style={{
              marginTop: "2rem",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Feedback from Project Manager – BISAG‑N:
          </h5>
          <p style={{ margin: 0}}>Hey Soham,</p>
          <p style={{ marginTop: "0.5rem" }}>
            It’s wonderful to hear from you! I often think back to your internship at{" "}
            BISAG‑N in 2023 when you built that audio classification
            system with CNNs and ANNs—both elegant and effective. You dove into data
            preprocessing challenges, streamlined GPU performance with thoughtful CUDA
            optimizations, and crafted a rock‑solid feature extraction pipeline using{" "}
            MFCCs and spectrogram analysis that hooked up flawlessly with our storage setup.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Beyond the tech, your clean, well‑documented code and your genuine
            curiosity made you a joy to work with. Any team would be lucky to have
            your blend of talent and drive—always happy to vouch for you!
          </p>
        </Col>
      </Row>

      {/* Feedback #2: Text left, logo right */}
      <Row style={{ marginTop: "5rem", alignItems: "center" }}>
        {/* Text column first */}
        <Col md={8}>
          <h5
            style={{
              marginTop: "2rem",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Feedback from Head of Department :
          </h5>
          <p style={{ margin: 0 }}>Hi Soham, great to reconnect!</p>
            <p style={{ marginTop: "0.5rem" }}>
            As Student Coordinator of our Career Development Cell in 2022–23, you organized
            12+ workshops and mock interviews, engaged over 250 students, and secured
            partnerships with 15+ companies. Your proactive gap analysis and one‑on‑one
            mentoring boosted participation by 40%.
        </p>
            <p style={{ marginTop: "0.5rem" }}>
            Your strategic leadership and dedication made a real impact—any team would be
            lucky to have you.
        </p>

        </Col>

        {/* Logo column second */}
        <Col
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Adani}
            alt="BISAG Logo"
            style={{ maxWidth: "80%", height: "auto" }}
          />
          <p style={{ marginTop: "1rem", fontWeight: "bold", textAlign: "center" }}>
            Career Development Cell - Coordinator
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home3;
