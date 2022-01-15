import React from 'react';

const Wind = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h3 style={{color:"#e9a30d"}}>Hierarchical forecast reconciliation in wind power prediction</h3>
            <br/>
            <br/>
            <h4>Predicting wind farm production is essential, especially to control the power grid.</h4>
            <h4>To generate forecasts, we use machine learning models that link the input meteorological data to the output energy production.</h4>
            <h4>Those forecasts are made at several scales. There is thus a 3-level hierarchy. </h4><h4>On a large
            scale there are wind turbines, on a medium scale there are wind farms and on a small scale there is an aggregation of
            several wind farms.</h4>
            <br/>
            <h4>However, forecasts made at one level of the hierarchy are made independently of the other levels of the hierarchy. </h4><h4>Thus
            there is a lack of consistency between the different levels of the hierarchy. </h4><h4>For this reason, forecast post processing
            methods have been created to provide consistent forecasts in the hierarchical sense.</h4><h4> These are methods of hierarchical
            reconciliation.</h4>
            <h4>We will study some of those methods and compare them on our databases.</h4>
            <br/>
            <br/>
            <a href='https://www.meteoswift.fr/' style={{color:'grey', border:'solid'}}> Internship at MeteoSwift </a>
            <br/>
            <br/>
            <img src='./img/python.svg' alt='python' style={{width:'45px'}}></img>
        </div>
    );
};

export default Wind;