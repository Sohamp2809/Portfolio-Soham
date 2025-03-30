import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soham_Resume.pdf";

function ResumePage() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      {/* Background "Resume" text */}
      <div className="resume-title-overlay">Resume</div>

      <Container>
        {/* Short Summary */}
        <Row className="summary-row">
          <Col md={12}>
            <h1 className="resume-heading">Software Developer</h1>
            <p className="resume-summary">
              Motivated and innovation-driven graduate student at Arizona State University,
              aiming to build a career in the U.S. software industry. Skilled in developing scalable
              web applications, AI/ML models, and cloud solutions using React, Node.js, ASP.NET,
              TensorFlow, and AWS. Committed to solving real-world challenges by optimizing systems
              for security, efficiency, and scalability, and collaborating with forward-thinking
              teams to drive digital transformation.
            </p>
          </Col>
        </Row>

        {/* Experience Section */}
        <h2 className="section-title">Experience</h2>

        {/* 1st (Left) & 2nd (Right) Experience */}
        <Row>
          <Col md={6} className="experience-card exp1">
            <h3>January 2023 - May 2023</h3>
            <h4>Software Engineer Intern (AI/ML)</h4>
            <h5>BISAG-N</h5>
            <ul>
              <li>Developed an AI-based audio classification system using Convolutional Neural Networks (CNNs) and Artificial Neural Networks (ANNs) with the UrbanSound8K dataset.</li>
              <li>Employed advanced feature extraction techniques (MFCCs and Spectrograms) to convert raw audio data into a format optimized for deep learning models.</li>
              <li>Utilized frameworks such as PyTorch and TensorFlow to design and train models, integrating Keras for rapid prototyping.</li>
              <li>Optimized GPU compute time by 30% through effective use of CUDA acceleration and memory management strategies.</li>
              <li>Enhanced model performance by 25% by implementing data augmentation, hyperparameter tuning, dropout, and batch normalization, ensuring robust generalization.</li>
            </ul>
          </Col>

          <Col md={6} className="experience-card exp2">
            <h3>May 2022- June 2022</h3>
            <h4>Cyber Security Intern</h4>
            <h5>BISAG-N</h5>
            <ul>
              <li>Developed a scalable and secure audio steganography system using Python and the Least Significant Bit (LSB) algorithm for embedding hidden watermarks in WAV files.</li>
              <li>Designed and implemented an encoding process to convert secret messages into binary data, ensuring imperceptible embedding without compromising audio quality.</li>
              <li>Developed a robust decoding algorithm to reliably extract the embedded watermark for copyright protection.</li>
              <li>Improved noise resilience and error correction by integrating techniques such as Spread Spectrum, Echo Hiding, and Phase Coding.</li>
              <li>Enhanced overall data security and watermark durability by ensuring zero data loss and implementing distributed storage mechanisms.</li>
            </ul>
          </Col>
        </Row>

        {/* 3rd (Bottom Center) Experience */}
        <Row className="justify-content-center">
          <Col md={6} className="experience-card exp3">
            <h3>April 2022 – December 2022</h3>
            <h4>Data Management Assistant</h4>
            <h5>AIIE, Career Development Cells</h5>
            <ul>
              <li>Migrated a decade’s worth of placement records to structured MySQL and PostgreSQL databases, significantly improving scalability and accessibility.</li>
              <li>Designed and implemented a comprehensive database schema capturing key details such as student information, placement status, and salary data.</li>
              <li>Developed and automated ETL pipelines to preprocess and validate data, ensuring integrity and consistency across multiple reports.</li>
              <li>Boosted reporting accuracy by 25% through the integration of advanced indexing and sharding strategies.</li>
              <li>Integrated the database with Power BI to deliver real-time analytics dashboards, enhancing strategic decision-making with visual insights.</li>
            </ul>
          </Col>
        </Row>

        {/* Education Section */}
        <h2 className="section-title">Education</h2>

        {/* 1st Education (Full Width) */}
        <Row>
          <Col md={12} className="education-card edu1">
            <h4>2023-2025</h4>
            <h5>Master Of Science In Information Technology</h5>
            <p>Arizona State University</p>
            <p>Grade: 3.74 / 4.00</p>
          </Col>
        </Row>

        {/* 2nd Education (Full Width or Half Width as needed) */}
        <Row>
          <Col md={12} className="education-card edu2">
            <h4>2019-2023</h4>
            <h5>Bachlors of Technology In Information and Communication Technology</h5>
            <p>Gujarat Technological University</p>
            <p>Grade: 3.48 / 4.00</p>
          </Col>
        </Row>

        {/* Download CV Button */}
        <div className="text-center" style={{ marginTop: "30px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-download-btn"
          >
            Download CV
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default ResumePage;
