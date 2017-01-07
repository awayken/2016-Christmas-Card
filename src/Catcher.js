import React, { Component } from 'react';
import pokeball from './pokeball.png';

class Catcher extends Component {
    render() {
        const catcherClass = `catcher catcher--${this.props.quarryName}`;

        return (
            <div className={catcherClass}>
                <img src={this.props.quarry} className="catcher--quarry animated bounce infinite" alt="The quarry" />
                <img src={pokeball} className="catcher--ball animated pulse infinite" alt="The ball"
                    onClick={(e) => this.props.handleCatch(e)} />
            </div>
        );
    }
}

export default Catcher;
