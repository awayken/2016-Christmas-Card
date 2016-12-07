import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    render() {
        return (
            <div className="pokemon">
                The chosen value is { this.props.pokemon.name }.
            </div>
        );
    }
}

export default Pokemon;
