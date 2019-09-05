import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img"
                        alt="avatar"
                        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>Html/Css - Bootstrap - Javascript - React - React Native - Nodejs - Express - MongoDb</p>

                            <div className="social-links">
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank"> <i className="fa fa-linkedin-square" aria-hidden="true"></i> </a>
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank"> <i className="fa fa-github-square" aria-hidden="true"></i> </a>
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank"> <i className="fa fa-free-code-camp" aria-hidden="true"></i> </a>
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank"> <i className="fa fa-youtube-square" aria-hidden="true"></i> </a>
                            </div>

                        </div>

                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default LandingPage;