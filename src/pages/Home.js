import React from 'react';
import Navigation from '../components/Navigation';
import NavigationHome from '../components/NavigationHome';
import "../style/components/_photo.css";

const Home = () => {
    if (window.screen.width > 600)
    {
        return (
            <div>
                <Navigation/> 
                <br/> 
                <img src="img/bastille-5.jpg" className="photo" alt="Bastille"/>
            </div>
        ); 
    }
    else{
        return (
            <div>
                <NavigationHome/> 
            </div>
        );
    }
    
};

export default Home;