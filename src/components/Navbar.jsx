import React from 'react';
import Hamburger from './Hamburger';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav nav-title">
                    <h3>Orlie Wayne A. Faustorilla</h3>
                </div>

                <Hamburger handleClick={() => console.log('fuck you')}/>

                <div className="nav nav-content">
                    <a href="#about-me" className="nav-content-item">About Me</a>
                    <a href="#skills" className="nav-content-item">Skills</a>
                    <a href="#latest-works" className="nav-content-item">Latest Works</a>
                    <a href="#hire-me" className="nav-content-item">Hire Me</a>
                </div>
            </nav>
        )
    }
}