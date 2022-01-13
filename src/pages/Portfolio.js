import React from 'react';
import Navigation from '../components/Navigation';
import Vignette from '../components/Vignette';

const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <div style={{paddingTop:'40px'}}>
            <br/>
            <br/>
            <h2>Projects</h2>
            <br/>
            <Vignette height={300} width={300}/>
            </div>
        </div>
    );
};

export default Portfolio;