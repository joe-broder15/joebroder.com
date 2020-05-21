import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

class Projects extends React.Component{

    constructor(props){
        super(props);
        this.content = require("./projects.json")
        
            
    }

    render(props){
        return(
            <Row>
                {this.content["projects"].map((project) =>
                    <Col lg={6} style={{marginBottom: "15px"}}>
                        <Card style={{height: '100%'}}>
                        <Card.Header as="h5" style={{textAlign: "left"}}><strong>{project["name"]}</strong></Card.Header>
                        <Card.Body style={{textAlign: "left"}}>
                            <img src={project["image"]} style={{height: 96, float: "left", marginRight: 10, marginBottom: 5}}/>
                            <Card.Text style={{textAlign: "left"}}>{project["description"]}</Card.Text>

                            {(project["links"]["Repo"] !== "NA") ?  <a href={project["links"]["Repo"]}>
                                            <Button variant="primary" style={{marginRight:"5px"}}>Github</Button>
                                            </a>: " "}
                            {(project["links"]["Website"] !== "NA") ?  <a href={project["links"]["Website"]}>
                                            <Button variant="primary" style={{marginLeft:"5px"}}>Website</Button>
                                            </a>: " " }
                        </Card.Body>
                        </Card>
                    </Col>     
                )}
            </Row>
        )
    }
}

export default Projects;

