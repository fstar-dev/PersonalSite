import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import pdf from "../../Assets/Resume.pdf";

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
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience(1)</h3>
            <Resumecontent
              title="Senior Full Stack Engineer [Freecast Inc]"
              date="Oct 2019 - Sep 2022"
              content={[
                "Developed useful and simplify Video Streaming Web Platform.",
                "Perform the most complex product technical design and prototyping, software development, bug verification and resolution.",
                "Designed event-driven architecture with AWS lambda, AWS SQS and AWS SNS.",
                "API development (RESTful, GraphQL) with NodeJS/Golang.",
                "Configured AWS serverless architecture with NodeJS runtime Lambda functions.",
                "Unit testing using frameworks like Mocha, Jest, Jasmine, Karma, Cypress, Selenium.",
                "Implemented the CI/CD and automation using GitHub and AWS Services.",
                "Worked with MySQL, PostgreSQL as well as NoSQL databases like MongoDB, AWS DynamoDB.",
                "Worked with Jira, Trello, Agile Scrum methodology."
              ]}
            />
            <Resumecontent
              title="Software Devleoper [Ulula]"
              date="Feb 2014 - Jul 2016"
              content={[
                "Created project in Laravel framework version 5.2 and upgraded till 5.6 including external packages.",
                "Shifted the vanilla JavaScript/jQuery to Vue.JS framework for performance optimization.",
                "Integrated various external APIs like Twilio, Nexmo, Senditoo, etc. for sending surveys and top-ups.."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Experience(2)</h3>
            <Resumecontent
              title="Full Stack Engineer [Bancor]"
              date="Sep 2016 - Jun 2019"
              content={[
                "Design client-side and server-side software architecture.",
                "Build the front-end of applications through appealing visual design with ReactJS.",
                "Develop and manage well-functioning PostgreSql, Mongo databases and applications.",
                "Developed web3 integration module with web3 and eth.js library.",
                "Write effective APIs using GraphQL and Rest API with Express.JS.",
                "Test software to ensure responsiveness and efficiency with Jest, Mocha and Chai.",
                "Implement CICD with Amazone Web Services.",
                "Build features and applications with a mobile responsive design using Tailwind. Bootstrap.",
                "Write technical documentation.",
                "Work with data scientists and analysts to improve software.",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Keio University of Information Sciences"
              date="2009 - 2013"
              content={["Bachelor's degree, Computer Science"]}
            />
            <h3 className="resume-title">Testimonials</h3>
            <Resumecontent
              title=""
              content={[
                "Delfin is a highly efficient and reliable professional who possesses a broad skill set for web application development.",
                "Delfin is an open-minded web developer who's ready for new challenges.",
                "Delfin is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!"
            ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
