import React from 'react';
import './blog.css'
import {Row, Col, Container, Image} from 'react-bootstrap'
import Article from './components/article'


export default class BlogPage extends React.Component {
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
                            <h1 id="myname" >Blog</h1>
                        </Col>
                        
                    </Row> 
                    <div className="divider"></div>
                    <Row>
                        <Article file="test1.docx"/>
                    </Row>

                </Container>
            </div>
        )
    }

}