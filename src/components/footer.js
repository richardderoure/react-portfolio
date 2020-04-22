import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
                <div className="footerInfo">Contact me through:</div>
                <div className="footerIcons">
                <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
