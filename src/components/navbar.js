import React from 'react';
import {Nav} from "react-bootstrap";

const Navigation = () => {
    return (
        <React.Fragment>
             <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
            </Nav>
        </React.Fragment>
     );
}
 
export default Navigation;