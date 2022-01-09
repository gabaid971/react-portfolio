import React from 'react';
import { Link } from 'react-router-dom';
import "../style/components/_nav.css";
import "../style/components/_socialnetwork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Navigation = () => {
    return (
        <div className="list">
            <ul>
                <li style={{float : 'left'}}><Link to="/" exact className="hover">  <img src="img/logo_dg.svg" className='svg' alt="logo"/>  </Link></li>
                <li className='section'><Link to="/about" exact className="hover"> About me</Link> </li>
                <li className='section'><Link to="/portfolio" exact className="hover"> Portfolio </Link> </li>
                <li className='section'><Link to="/contact" exact className="hover"> Contact </Link> </li>
                <a href="https://www.github.com/gabaid971"
                    className="github social" style={{float : 'right', paddingRight : '10px', paddingTop: '20px'}}>
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-gabai"
                    className="linkedin social" style={{float : 'right', paddingRight : '10px', paddingTop: '20px'}}>
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
            </ul>
        </div>
    );
};

export default Navigation;