import React from 'react';

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    render() {
        return (
            <button type="button" className="hamburger" onClick={this.props.handleClick}>
                <div className="hamburger-lines"></div>
                <div className="hamburger-lines"></div>
                <div className="hamburger-lines"></div>
            </button>
        )
    }
}