import React from 'react';

export default class IntroCard extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <div className="my-intro">
                    <h3># i n t r o</h3>

                    <div>
                        <h2>Hi, I'm</h2>
                        <h2 className="my-name">Orlie Wayne A. Faustorilla</h2>

                        <div className="niche">Full Stack Web Developer</div>
                    </div>

                    <div className="short-bio">
                        <i>"I wanna be the very best like no one ever was."</i> - Pokemon Theme Song
                    </div>

                    <div className="intro-buttons">
                        <input type="button" value="Know More" className="button" id="know-more-button"/>
                        <input type="button" value="Download CV" className="button" id="download-cv-button"/>
                    </div>
                </div>
            </div>
        )
    }
}