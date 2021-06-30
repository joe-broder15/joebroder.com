import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Projects from "./projects";
import "./home.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div id="homepage">
        <Container id="content">
          {/* HEADER */}
          <Row style={{ justifyContent: "center" }}>
            <Col md="auto">
              <Image src="./joe.png" width={100} height={100} rounded />
            </Col>
            <Col id="namebox" md="auto">
              <h1 id="myname">Joe Broder</h1>
            </Col>
            {/* <NavCard></NavCard> */}
          </Row>

          {/* nav items  */}
          <div className="divider-invisible"></div>
          <Row style={{ justifyContent: "center" }}>
            <Col sm="auto">
              <h4>
                <a href="https://medium.com/@joe.broder15">Blog</a>
              </h4>
            </Col>
            <Col sm="auto">
              <h4>
                <a href="mailto:joe.broder@berkeley.edu">Email</a>
              </h4>
            </Col>
            <Col sm="auto">
              <h4>
                <a href="Joe Broder CV.pdf">Resume</a>
              </h4>
            </Col>
            <Col sm="auto">
              <h4>
                <a href="https://github.com/joe-broder15">Github</a>
              </h4>
            </Col>
            <Col sm="auto">
              <h4>
                <a href="https://www.linkedin.com/in/jdbroder/">Linkedin</a>
              </h4>
            </Col>
          </Row>
          <div className="divider"></div>

          {/* About me */}
          <Row>
            <Col md="auto">
              <h2>
                <strong>About Me</strong>
              </h2>
            </Col>
          </Row>

          <Row>
            <Col md="auto">
              <p align="left">
                I'm a senior at UC Berkeley majoring in Computer Science in the
                College of Engineering (EECS). My interests include computer
                security, cryptography, distributed systems, blockchain,
                operating systems, and system software.{" "}
              </p>
              <p align="left">
                During a six-month co-op at Intel, I worked on production
                firmware-level security features for next-generation storage
                devices. Successful client projects I’ve worked on include a
                Flask microservice-based Alexa application and a full-stack MERN
                eSports marketplace. At Blockchain at Berkeley, I was COO, and
                currently, I'm currently a software consultant building dApps
                and large-scale blockchain solutions for clients. I also train
                new recruits, teach full-stack MERN web development, and develop
                new blockchain curriculum.{" "}
              </p>

              <p align="left">
                Python, C, Etherium (Solidity), and JavaScript are my "go-to"
                languages. I’m proficient with Web3.js, MERN stack, Flask,
                Bootstrap, SQL, bCrypt, Marshmallow, SQLAlchemy, Qt/QML, GDB,
                Git, Mbedtls, Pandas, Numpy, Matplotlib, and Seaborn.
              </p>
            </Col>
          </Row>

          <div className="divider"></div>

          {/* Projects Text */}
          <Row>
            <Col md="auto">
              <h2>
                <strong>Personal Projects</strong>
              </h2>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col md="auto"></Col>
          </Row>

          {/* Project Cards */}
          <Projects />
        </Container>
      </div>
    );
  }
}
