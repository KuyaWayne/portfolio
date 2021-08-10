import React from 'react';

export default class Skill extends React.Component {
    render() {
        return (
            <div className="skill-info">
                <div className="img-container">
                    <img src={this.props.image} alt={this.props.title} className="skill-image"/>
                </div>

                <h3>{this.props.title}</h3>
            </div>
        )
    }
}