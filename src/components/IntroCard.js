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
                        <i>"I do not fear the man who knows 1000 styles of punch, I fear the man who practiced 1 punch 1000 times."</i> - Bruce Lee
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