import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

const Navigation = () => {
    return (
        <React.Fragment>
             <Navbar sticky="top" className="justify-content-center navbar" activeKey="/home">
                <Nav.Item className="navItem">
                    <Nav.Link href="/" className="navLink">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link href="/about" className="navLink">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link href="/portfolio" className="navLink">Portfolio</Nav.Link>
                </Nav.Item>
            </Navbar>
        </React.Fragment>
     );
}
 
export default Navigation;