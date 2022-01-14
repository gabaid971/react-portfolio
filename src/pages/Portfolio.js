import React from 'react';
import Navigation from '../components/Navigation';
import '../style/components/_portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <div style={{paddingTop:'40px'}}>
                <br/>
                <br/>
                <h2>Projects</h2>
                <br/>
                <br/>
                <br/>
                <div className='container'>
                    <div className='item robot'></div>
                    <div className='item gmm'></div>
                    <div className='item wind'></div>
                    <div className='item tictactoe'></div>
                    <div className='item fingerprint'></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;