import React from 'react';

const Riotstats = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h3 style={{color:"#e9a30d"}}>League of Legends matchmaking survey</h3>
            <br/>
            <br/>
            <h4>League of Legends is one of the most popular video games in the world.</h4>
            <h4>In this game, players battle in classic 5v5 matches with the ultimate goal of destroying the enemy Nexus.</h4>
            <h4> In <a href='./img/riot_stats.pdf' target='_blank' style={{color:'grey'}}> this paper</a>, our aim is to evaluate if the matchmaking algorithm fo this game, favors winning and losing streaks.</h4>
            <br/>
            <br/>
            <a href="https://www.github.com/gabaid971/riot_stats" style={{color:'grey', border:'solid'}}> Source code </a>
            <br/>
            <br/>
            <img src='./img/python.svg' alt='python' style={{width:'45px'}}></img>
        </div>
    );
};

export default Riotstats;