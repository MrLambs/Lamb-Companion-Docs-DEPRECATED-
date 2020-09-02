import React from 'react';
import './Styles/Home.css'

const Home = () => {
    return (
        // Starting with a short about-bot section and summary
        <div className="blue-grey darken-1 white-text content">

            <div className="home">
                <div className="about">
                    <h1>An All-Purpose Discord Bot</h1>
                    <div className="summary">
                        <p>Lamb Companion began as a means to access information about beloved games as quickly as possible. Of course there are other bots on the market for various games and with many different functionalities, but who wants 8-10 bots clogging up their server? It's off-putting. Due to this, Lamb Companion aims to fill as many needs in one place as absolutely possible.</p>
                    </div>
                </div>
            </div>

            <div className="invite-me">
                <h1>Invite Me!</h1>
                <div className="summary">
                    Want to invite me to your Discord server?
                </div>
                <div className="click-here">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=627646100207173645&permissions=0&scope=bot" target="_blank" className="waves-effect waves-light btn-large" rel="noopener noreferrer">Click Here!</a>
                </div>
            </div>

        </div>
    );
}

export default Home;