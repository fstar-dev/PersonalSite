import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Benjamin.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);
  
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Web Developer [Omdena]"
              date="May 2019 - Jan 2020"
              content={[
                "Developed an application from the ground up; also configured the project structure and application skeleton.",
                "Created reusable React components for the date picker, dropdown, buttons, and input styles according to the provided designs.",
                "Developed an application which manages subscriptions and monthly payments.",
                "Developed an event management web application where the client is able to manage his events and all of the guests.",
                "Rewrote an Angular 2.0 application with Vue.js",
                "Created a custom CMS with Vue.js and AWS Lamda for a client with specail needs in functionality."
              ]}
            />
            <Resumecontent
              title="Junior Web Developer [Freelancer]"
              date="Dec 2016 - May 2019"
              content={[
                "Created reusable UI framework.",
                "Used GraphQL API.",
                "Reduced ton of boilerplate codes with custom hooks."
              ]}
            />
            <Resumecontent
              title="JavaScript  and Front end Web Developer"
              date="March 2016 - Nov 2016"
              content={[
                "Worked with a React/Redux environment on a major enterprise product already in production",
                "Helped integrate charts libraries based on D3 and React."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Tokyo University of Information Sciences"
              date="2011 - 2014"
              content={["Bachelor's degree, Computer Science"]}
            />
            <Resumecontent
              title="Osaka Shiritsu Kizu Junior High School"
              date="2008 - 2011"
              content={["I was the best student who was passionate about mathematics and computer science."]}
            />
            <h3 className="resume-title">Testimonials</h3>
            <Resumecontent
              title=""
              content={[
                "Benjamin is a highly efficient and reliable professional who possesses a broad skill set for web application development.",
                "Benjamin is an open-minded web developer who's ready for new challenges.",
                "Benjamin is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!"
            ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
