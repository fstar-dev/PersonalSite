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
import vipealo from "../../Assets/Projects/vipealo.png";
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
              description="sampel"
              link="https://initiativeq.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mercadolivre}
              isBlog={false}
              title="mercadolivre (React & AWS)"
              description="react"
              link="https://www.mercadolivre.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sport}
              isBlog={false}
              title="Sprot Unity (React & Redux)"
              description="aaa"
              link="https://sportunity.com/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vipealo}
              isBlog={false}
              title="Excursions and Activities to Discover ( React & Next)"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://www.vipealo.com/"
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
