import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

const Navigation = () => {
    return (
        <React.Fragment>
            <Navbar className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link activeClassName="activeNav">Home</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/about">
                        <Nav.Link activeClassName="activeNav">About</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/portfolio">
                        <Nav.Link activeClassName="activeNav">Portfolio</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Navbar>
        </React.Fragment>
     );
}
 
export default Navigation;