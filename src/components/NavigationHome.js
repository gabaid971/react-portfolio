import React from 'react';
import { Link } from 'react-router-dom';
import "../style/components/_navhome.css";
import "../style/components/_socialnetwork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';

const NavigationHome = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div className={`${showLinks ? "show-nav": "hide-nav"}`}>
            <div>
                <ul> <li style={{float : 'left', paddingLeft : '10px', paddingTop : '10px'}}><Link to="/" exact className="hover">  <img src="img/logo_dg.svg" className='svg' alt="logo"/>  </Link></li> </ul>
                <button className='burger' onClick={handleShowLinks}> 
                    <div className='burgerbar'></div>
                </button>
                <ul>
                    <a href="https://www.github.com/gabaid971"
                        className="github social" style={{float : 'right', paddingRight : '10px', transform: 'translate(0px ,-20px)'}}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-gabai"
                        className="linkedin social" style={{float : 'right', paddingRight : '10px', transform: 'translate(0px ,-20px)'}}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </ul>
            </div>
            <div className={`${showLinks ? "show-nav": "hide-nav"}`}>
            <ul className='contenthome'>
                <li className='homies'><Link to="/about" exact className="hover"> About me</Link> </li>
                <li className='homies'><Link to="/portfolio" exact className="hover"> Portfolio </Link> </li>
                <li className='homies'><Link to="/contact" exact className="hover"> Contact </Link> </li>
            </ul>
            </div>
            <img src="img/bastillecrop2.jpg" className="photo" alt="Bastille"/>
        </div>
    );
};

export default NavigationHome;