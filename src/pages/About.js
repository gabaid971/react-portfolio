import React from 'react';
import Navigation from '../components/Navigation';
import ReactGA from 'react-ga';

const About = () => {
    ReactGA.pageview(window.location.pathname);
    return (
        <div>
            <Navigation/>
            <div style={{paddingTop:'40px'}}>
                <br/>
                <br/>
                <img src='./img/about.jpg' alt='About me' className='about'></img>
                <h3>My name is Daniel Gabaï, and I recently graduated from ENSIMAG (a French engineering school). </h3>
                <h3>I am currently looking for an opportunity in the field of Machine Learning.</h3>
                <br/>
                <br/>
                <h3> I let you discover my resume: </h3>
                <div>
                    <a href='./img/cv.pdf' target='_blank'> Dowload CV </a>
                </div>
            </div>
        </div>
    );
};

export default About;