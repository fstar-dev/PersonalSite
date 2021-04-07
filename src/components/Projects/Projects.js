import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import initiativeq from "../../Assets/Projects/initiativeq.png";
import mercadolivre from "../../Assets/Projects/mercadolivre.png";
import sport from "../../Assets/Projects/sport unity.png";
import impactSuite from "../../Assets/Projects/impact suite.png";
import odes2 from "../../Assets/Projects/odes2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={initiativeq}
              isBlog={false}
              title="initiativeq (React & MobX)"
              description=""
              link="https://initiativeq.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mercadolivre}
              isBlog={false}
              title="mercadolivre (React & AWS)"
              description=""
              link="https://www.mercadolivre.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sport}
              isBlog={false}
              title="Sport Unity (React & Redux)"
              description=""
              link="https://sportunity.com/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impactSuite}
              isBlog={false}
              title="The Impact Suite ( Vue & Tailwind CSS)"
              description=""
              link="https://ap2.theimpactsuite.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odes2}
              isBlog={false}
              title="ODES2 (Vue & Nuxt)"
              description=""
              link="https://odesd2.com/en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
