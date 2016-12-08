import React, { Component } from 'react';
import Chooser from './Chooser';
import Pokemon from './Pokemon';

// Pokédex data
import pokedex from './_pokedex';

// Styles
import './App.css';

var family = [
    pokedex.miles,
    pokedex.holli,
    pokedex.ian,
    pokedex.ainsley
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenValue: 'none', caught: [], evolved: [], family: family };

        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(newValue, e) {
        if ( e ) {
            e.preventDefault();
        }

        this.setState({
            chosenValue: newValue
        });
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const chosenValue = this.state.chosenValue;

        return (
            <div className="app">
                <Chooser
                    choices={this.state.family}
                    chosenValue={chosenValue}
                    caught={this.state.caught}
                    // evolved={this.state.evolved}
                    handleChoice={this.handleChoice} />

                {(chosenValue !== 'none') ?
                    <div>
                        <Pokemon pokemon={pokedex[chosenValue]} />
                        <a href="#close" title="Close" onClick={(e) => this.handleChoice('none', e)}>Close</a>
                    </div>
                : ''}
            </div>
        );
    }
}

export default App;
