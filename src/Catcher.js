import React, { Component } from 'react';
import pokeball from './pokeball.png';

class Catcher extends Component {
    render() {
        const catcherClass = `catcher catcher--${this.props.quarryName}`;

        let ballClass = `catcher--ball animated`;
        if (this.props.isAnimatingCatch) {
            ballClass += ` toss`;
        } else {
            ballClass += ` pulse infinite`;
        }

        return (
            <div className={catcherClass}>
                <img src={this.props.quarry} className="catcher--quarry animated bounce infinite" alt="The quarry" />
                <img src={pokeball} className={ballClass} alt="The ball"
                    onClick={(e) => this.props.handleCatch(e)} />
            </div>
        );
    }
}

export default Catcher;
