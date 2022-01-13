import React from 'react';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../style/components/_photo.css";

const Contact = () => {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <div style={{paddingTop:'40px'}}>
            <h2>Get in touch</h2>
            <br/>
            <ContactForm/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>Localisation</h4>
                        <p>Paris, France</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>Phone number</h4>
                        <CopyToClipboard text="0677584292" className="hover">
                        <p
                        style={{cursor: 'pointer'}}
                        className="clipboard"
                        onClick={() => {
                        alert("Phone number copied !");
                        }}
                        >
                        +33 6 77 58 42 92
                        </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>Email</h4>
                        <CopyToClipboard text="gabaidaniel0@gmail.com" className="hover">
                        <p
                        style={{cursor: 'pointer'}}
                        className="clipboard"
                        onClick={() => {
                            alert("Email copied !");
                        }}
                        >
                        gabaidaniel0@gmail.com
                        </p>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>  
            </div>         
        </div>
    );
};

export default Contact;