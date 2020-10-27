import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Projects from './components/projects'
import './home.css'

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(props) {
        return(
            <div id="homepage">
                <Container id="content">

                    {/* HEADER */}
                    <Row >
                        <Col md="auto">
                            <Image 
                            src="./joe.png" 
                            width={100}
                            height={100}
                            rounded/>
                        </Col>
                        <Col id="namebox"md="auto">
                            <h1 id="myname" >Joe Broder</h1>
                        </Col>
                        {/* <NavCard></NavCard> */}
                        
                    </Row>  
                    <div className="divider"></div>

                    {/* About me */}
                    <Row>
                        <Col md="auto"><h2><strong>About Me</strong></h2></Col>
                    </Row>
                    
                    <Row>
                        <Col md="auto">
                            <p align="left">
                                My name is Joe, I'm a rising senior EECS (Electrical Engineering and Computer Science) 
                                major at UC Berkeley interested in security, cryptography, and software 
                                engineering. I'm a full-stack blockchain, web, and mobile developer with experience
                                using Solidity, Web3.js, MERN stack, Flask, Bootstrap, and SQL. Over the past year 
                                I've been a software development consultant at <a href="https://blockchain.berkeley.edu/"> blockchain 
                                at berkeley</a> where I build dApps and work on large scale solutions for clients. My favorite quote is "If I had 
                                more time I'd have written less code"
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                            </p>
                        </Col>
                    </Row>

                    <div className="divider"></div>
                    
                    {/* Projects Text */}
                    <Row>
                        <Col md="auto"><h2><strong>Personal Projects</strong></h2></Col>
                    </Row>
                    <Row style={{marginBottom: "10px"}}>
                        <Col md="auto">
                        </Col>
                    </Row>

                    {/* Project Cards */}
                    <Projects/>
                </Container>
            </div>          
        )
    }
}

