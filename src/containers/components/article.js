import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap'
var fs = require('fs');
var path = require('path');
var mammoth = require("mammoth");

export default class Article extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: this.props.file,
            content: "Loading"
        }   
            
    }

    componentDidMount(props) {
        // var reader = new FileReader();
        // reader.onloadend = function(event) {
        //     var arrayBuffer = reader.result;

        // var data = fs.readFileSync(this.props.file);
        mammoth.convertToHtml({path: "./"+this.props.file}).then(function (resultObject) {
            console.log(resultObject.value);
            this.setState({content: resultObject.value});
            
        })  

            
        // };
        // reader.readAsArrayBuffer(this.props.file);
    }

    render(props){
        return(
                <Card style={{height: '100%'}}>
                <Card.Header as="h5" style={{textAlign: "left"}}><strong>Article title</strong></Card.Header>
                <Card.Body style={{textAlign: "left"}}>
                    <Card.Text style={{textAlign: "left"}}>
                        {this.content}
                    </Card.Text>
                </Card.Body>
                </Card>
        )
    }
}



