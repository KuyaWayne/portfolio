import React, { Fragment } from 'react';
import IntroCard from "../components/IntroCard";
import AboutMe from "../components/AboutMe";

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