import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Photo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    // We add an id="home2-section" so we can scroll here
    <Container fluid className="home-about-section" id="home2-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hey there, <span>I'm Soham Patel!</span>
            </h1>
            <p className="home-about-body">
              I’m a Phoenix-based innovator who fell in love with programming early on ❤️. My journey has taken me from mastering classics like{" "}
              <b className="purple">Python</b>, <b className="purple">JavaScript</b>, and <b className="purple">Java</b> to building robust web solutions and exploring the fascinating world of <b className="purple">Blockchain</b> 🚀.<br /><br />
              Currently, I’m pursuing my Master’s in Information Technology at Arizona State University, where I blend traditional programming with modern tools such as{" "}
              <b className="purple">Node.js</b>, <b className="purple">React.js</b>, and <b className="purple">Next.js</b> to create scalable, secure digital experiences.<br /><br />
              My hands-on experience spans roles as a Software Engineer Intern, Cyber-Security Intern, and Data Management Assistant - optimizing AI systems, securing data pipelines, and streamlining complex ETL processes. From architecting a high-availability hospital management system to crafting a secure e-commerce platform, every project fuels my passion for innovative tech.<br /><br />
              Let’s connect and create something extraordinary together! 🤝💡
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sohamp2809"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:psoham028@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail/>
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soham-patel-381243201/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
