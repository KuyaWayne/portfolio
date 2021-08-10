import React from 'react';
import Skill from "./Skill";

import MongoDB from './../images/mongodb.png';
import ExpressJS from './../images/expressjs.png';
import ReactJS from './../images/reactjs.png';
import NodeJS from './../images/node.png';
import MySQL from './../images/mysql.png';
import Git from './../images/git.png';
import JQuery from './../images/jquery.png';
import Laravel from './../images/laravel.png';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                <div className="about-me-container">
                    <h1 className="some-text-at-the-top">
                        About Me
                    </h1>

                    <div className="skills">
                        <Skill title="MongoDB" image={MongoDB} />
                        <Skill title="ExpressJS" image={ExpressJS} />
                        <Skill title="ReactJS" image={ReactJS} />
                        <Skill title="NodeJS" image={NodeJS} />
                        <Skill title="MySQL" image={MySQL} />
                        <Skill title="Git" image={Git} />
                        <Skill title="JQuery" image={JQuery} />
                        <Skill title="Laravel" image={Laravel} />
                    </div>

                    <div className="download-cv">
                        <input type="button" value="Download CV" className="button" />
                    </div>
                </div>
            </div>
        )
    }
}