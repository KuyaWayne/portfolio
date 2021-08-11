import React from 'react';

export default class Hamburger extends React.Component {
    render() {
        return (
            <div className="hamburger">
                <div className="hamburger-lines"></div>
                <div className="hamburger-lines"></div>
                <div className="hamburger-lines"></div>
            </div>
        )
    }
}