import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";
import {
  SiAngular,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiTerraform,
  SiJenkins,
  SiApachespark,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <CgCPlusPlus size={40} />
        </div>
        <p className="skill-label">C++</p>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <DiJavascript1 size={40} />
        </div>
        <p className="skill-label">JavaScript</p>
      </Col>

      {/* Go */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <TbBrandGolang size={40} />
        </div>
        <p className="skill-label">Go</p>
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <DiNodejs size={40} />
        </div>
        <p className="skill-label">Node.js</p>
      </Col>

      {/* React.js */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <DiReact size={40} />
        </div>
        <p className="skill-label">React</p>
      </Col>

      {/* Angular */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiAngular size={40} />
        </div>
        <p className="skill-label">Angular</p>
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiDocker size={40} />
        </div>
        <p className="skill-label">Docker</p>
      </Col>

      {/* Kubernetes */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiKubernetes size={40} />
        </div>
        <p className="skill-label">Kubernetes</p>
      </Col>

      {/* AWS */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiAmazonaws size={40} />
        </div>
        <p className="skill-label">AWS</p>
      </Col>

      {/* Terraform */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiTerraform size={40} />
        </div>
        <p className="skill-label">Terraform</p>
      </Col>

      {/* Jenkins (CI/CD) */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiJenkins size={40} />
        </div>
        <p className="skill-label">Jenkins</p>
      </Col>

      {/* ETL / Spark */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiApachespark size={40} />
        </div>
        <p className="skill-label">ETL / Spark</p>
      </Col>

      {/* RESTful APIs (Postman) */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiPostman size={40} />
        </div>
        <p className="skill-label">Postman</p>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <DiPython size={40} />
        </div>
        <p className="skill-label">Python</p>
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <DiJava size={40} />
        </div>
        <p className="skill-label">Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
