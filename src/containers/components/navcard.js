import React from 'react';
import {ListGroup} from 'react-bootstrap'

class NavCard extends React.Component{

    constructor(props){
        super(props);
    }

    render(props){
        return(
            <ListGroup style={{padding: 0}}>
                <ListGroup.Item>Resume</ListGroup.Item>
                <ListGroup.Item>Github</ListGroup.Item>
                <ListGroup.Item>Linkedin</ListGroup.Item>
                <ListGroup.Item>Blog</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
            </ListGroup>
        )
    }
}

export default NavCard;

