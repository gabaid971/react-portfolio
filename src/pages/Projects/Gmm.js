import React from 'react';

const Gmm = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h3 style={{color:"#e9a30d"}}>Mixture models to model written letters</h3>
            <br/>
            <br/>
            <h4>In <a href='./img/mixture_models.pdf' target='_blank' style={{color:'grey'}}>this paper</a> we will model the written
            letters of the Unistroke dataset using mixture models.</h4>
            <h4>We will first focus on Gaussian mixture models (GMM), which we will then compare with Von Mises mixture models.</h4>
            <br/>
            <br/>
            <a href="https://www.github.com/gabaid971/mixture_models" style={{color:'grey', border:'solid'}}> Source code </a>
            <br/>
            <br/>
            <img src='./img/python.svg' alt='python' style={{width:'45px'}}></img>
        </div>
    );
};

export default Gmm;