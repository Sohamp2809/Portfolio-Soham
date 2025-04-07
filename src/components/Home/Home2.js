import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/Photo.png"; // Adjust the path as needed
import Home3 from "./Home3"; 

function Home2() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container
  fluid
  className="home-about-section"
  id="home2-section"
>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginTop: "6rem" }}>
               <span>Introducing Myself!</span>
            </h1>
            <p className="home-about-body">
            Hello, I’m Soham Patel—an enthusiastic Phoenix-based tech explorer with a lifelong passion for all things code. My earliest sparks of curiosity led me to master {" "}
              <b>Python</b>,{" "}
              <b>JavaScript</b>, and{" "}
              <b>Java</b>  opening the door to building dynamic web solutions and diving into the thrilling realm of{" "}
              <b>AI</b> 🚀.
              <br />
              <br />
              {showMore && (
                <>
                  Right now, I’m pursuing my Master’s in Information Technology at Arizona State University, blending timeless programming concepts with cutting-edge tools like{" "}
                  <b>Node.js</b>,{" "}
                  <b>React.js</b>, and{" "}
                  <b>Next.js</b> to craft secure, scalable digital experiences.
                  <br />
                  <br />
                  Along my journey, I’ve worn multiple hats: Software Engineer Intern, Cyber-Security Intern, and Data Management Assistant. These roles let me optimize AI systems, safeguard data pipelines, and streamline complex ETL processes—whether I’m engineering high-availability hospital management systems or building secure e-commerce platforms. Each project fuels my excitement for innovative tech.
                  <br />
                  <br />
                </>
              )}
              Let’s connect and create something extraordinary together! 🤝💡
            </p>
            <button
              onClick={toggleShowMore}
              style={{
                cursor: "pointer",
                background: "#fff",        
                border: "1px solid #000",   
                color: "#000",              
                padding: "0.5em 1em",
                borderRadius: "4px",
                marginTop: "1rem",
              }}
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </Col>
          <Col 
  md={4} 
  className="myAvtar" 
  style={{ marginTop: "6rem" }}
>
  <img src={myImg} className="img-fluid" alt="avatar" />
</Col>

        </Row>
        
      </Container>
    {/* Render Home3 right after Home2 content */}
    <Home3 />
    </Container>
  );
}

export default Home2;
