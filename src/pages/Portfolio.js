import React from 'react';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import '../style/components/_portfolio.css';
import Robot from './Projects/Robot'
import Gmm from './Projects/Gmm'
import Wind from './Projects/Wind'
import Tictactoe from './Projects/Tictactoe'
import Fingerprint from './Projects/Fingerprint'

const Portfolio = () => {
    const [showRobot, setShowRobot] = useState(false)
    const [showGmm, setShowGmm] = useState(false)
    const [showWind, setShowWind] = useState(false)
    const [showTictactoe, setShowTictactoe] = useState(false)
    const [showFingerprint, setShowFingerprint] = useState(false)
    const showrobot = () => {
        setShowRobot(!showRobot)
        setShowGmm(false)
        setShowWind(false)
        setShowTictactoe(false)
        setShowFingerprint(false)
    }
    const showgmm = () => {
        setShowGmm(!showGmm)
        setShowRobot(false)
        setShowWind(false)
        setShowTictactoe(false)
        setShowFingerprint(false)
    }
    const showwind = () => {
        setShowWind(!showWind)
        setShowRobot(false)
        setShowGmm(false)
        setShowTictactoe(false)
        setShowFingerprint(false)
    }
    const showtictactoe = () => {
        setShowTictactoe(!showTictactoe)
        setShowRobot(false)
        setShowGmm(false)
        setShowWind(false)
        setShowFingerprint(false)
    }
    const showfingerprint = () => {
        setShowFingerprint(!showFingerprint)
        setShowRobot(false)
        setShowGmm(false)
        setShowWind(false)
        setShowTictactoe(false)
    }
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
                    <button className='item robot' onClick={showrobot}></button>
                    <div className='item gmm' onClick={showgmm}></div>
                    <div className='item wind' onClick={showwind}></div>
                    <div className='item tictactoe' onClick={showtictactoe}></div>
                    <div className='item fingerprint' onClick={showfingerprint}></div>
                </div>
                {showRobot ? <Robot/>: null}
                {showGmm ? <Gmm/>: null}
                {showWind ? <Wind/>: null}
                {showTictactoe ? <Tictactoe/>: null}
                {showFingerprint ? <Fingerprint/>: null}
            </div>
        </div>
    );
};

export default Portfolio;