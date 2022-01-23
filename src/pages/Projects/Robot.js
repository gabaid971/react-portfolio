import React from 'react';

const Robot = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h3 style={{color:'#e9a30d'}}>Situational motion planning of a mobile robot in uncertain logistics environment</h3>
            <br/>
            <br/>
            <h4>This project focuses on the motion planning of a robot surrounded by humans,
            in a logistic environment. </h4><h4>The uncertainty related to pedestrian movements
            must be taken into account, to allow the robot to navigate efficiently and
            safely to its goal.</h4>
            <h4>The trajectories will be predefined and we will only take
            care of the speed control of the robot.</h4>
            <br/>
            <h4> To this end, we will present a method
            based on the resolution of a partially observable Markov decision process
            (POMDP). </h4><h4> This method will model the uncertainties on the directional intention of
            pedestrians, and will allow us to adapt the speed of our robot.</h4>
            <br/>
            <br/>
            <a href='https://www.cea.fr/' style={{color:'grey', border:'solid'}}> Internship at CEA </a>
            <br/>
            <br/>
            <img src='./img/cplusplus.svg' alt='cplusplus' style={{width:'50px'}}></img>
        </div>
    );
};

export default Robot;