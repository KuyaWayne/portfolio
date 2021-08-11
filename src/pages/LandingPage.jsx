import React, { Fragment } from 'react';
import IntroCard from "../components/IntroCard.jsx";
import AboutMe from "../components/AboutMe.jsx";

export default class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <IntroCard />
                <AboutMe />
            </Fragment>
        )
    }
}