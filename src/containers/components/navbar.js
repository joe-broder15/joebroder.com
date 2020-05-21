import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/"><strong>Joe Broder</strong> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link style={{color: "white"}} href="">Blog (Coming Soon)</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="mailto:joe.broder@berkeley.edu">Email</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="Joe-Broder-CV.pdf">Resume</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="https://github.com/joe-broder15">Github</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="https://www.linkedin.com/in/jdbroder/">Linkedin</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;

