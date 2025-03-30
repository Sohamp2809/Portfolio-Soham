import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi,
  SiTableau,
  SiVisualstudiocode,
  SiDocker,
  SiGit,
  SiJenkins,
  SiGithubactions,
  SiPostman,
  SiTerraform,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Power BI */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiPowerbi size={40} />
        </div>
        <p className="skill-label">Power BI</p>
      </Col>

      {/* Tableau */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiTableau size={40} />
        </div>
        <p className="skill-label">Tableau</p>
      </Col>

      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiVisualstudiocode size={40} />
        </div>
        <p className="skill-label">VS Code</p>
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiDocker size={40} />
        </div>
        <p className="skill-label">Docker</p>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiGit size={40} />
        </div>
        <p className="skill-label">Git</p>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiJenkins size={40} />
        </div>
        <p className="skill-label">Jenkins</p>
      </Col>

      {/* GitHub Actions */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiGithubactions size={40} />
        </div>
        <p className="skill-label">GitHub Actions</p>
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiPostman size={40} />
        </div>
        <p className="skill-label">Postman</p>
      </Col>

      {/* Terraform */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiTerraform size={40} />
        </div>
        <p className="skill-label">Terraform</p>
      </Col>

      {/* AWS Management Console (using AWS icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-box">
          <SiAmazonaws size={40} />
        </div>
        <p className="skill-label">AWS Console</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
