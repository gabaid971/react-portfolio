import React from 'react';

const Fingerprint = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h3 style={{color:"#e9a30d"}}>Digital analysis of fingerprints</h3>
            <br/>
            <br/>
            <h4>Fingerprint recognition requires a pre-processing of the images, allowing to identify features, called minutiae.</h4>
            <h4>Then, several mathematical aspects of fingerprint image pre-processing are discussed in <a href='./img/report_fingerprint.pdf' target='_blank' style={{color:'grey'}}> this paper</a>.</h4>
            <h4>We will see in particular the bicubic interpolation for image rotation, as well as filtering methods for denoising fingerprint images.</h4>
            <br/>
            <br/>
            <a href="https://www.github.com/gabaid971/fingerprint" style={{color:'grey', border:'solid'}}> Source code </a>
            <br/>
            <br/>
            <img src='./img/cplusplus.svg' alt='cplusplus' style={{width:'50px'}}></img>
        </div>
    );
};

export default Fingerprint;