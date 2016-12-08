import React, { Component } from 'react';

// React Components
import Chooser from './Chooser';
import Pokemon from './Pokemon';

// Pokédex data
import pokedex from './_pokedex';

// Styles
import './App.css';

// Create our family of Pokémon
var family = [
    pokedex.miles,
    pokedex.holli,
    pokedex.ian,
    pokedex.ainsley
];

// Define our component
class App extends Component {
    constructor(props) {
        super(props);

        // Initialize our state
        this.state = {
            chosenValue: 'none',
            caught: [],
            evolved: [],
            family: family
        };

        // Bind our handlers to our class
        this.handleChoice = this.handleChoice.bind(this);
    }

    // Handle people choosing a Pokémon
    handleChoice(newValue, e) {
        if ( e ) {
            e.preventDefault();
        }

        // Set the chosenValue state to newValue
        this.setState({
            chosenValue: newValue
        });
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const chosenValue = this.state.chosenValue;

        var chosenPokemon = '';
        if ( chosenValue !== 'none' ) {
            chosenPokemon = pokedex[chosenValue];
        }

        return (
            <div className="app">
                <Chooser
                    choices={this.state.family}
                    chosenValue={chosenValue}
                    caught={this.state.caught}
                    handleChoice={this.handleChoice} />

                {(chosenValue !== 'none') ?
                    <div>
                        <Pokemon
                            cp={chosenPokemon.cp}
                            portrait={chosenPokemon.portrait}
                            name={chosenPokemon.name}
                            stats={chosenPokemon.stats}
                            description={chosenPokemon.description}
                            catch={chosenPokemon.catch} />
                        <a className="app--close" href="#close" title="Close" onClick={(e) => this.handleChoice('none', e)}>Close</a>
                    </div>
                : ''}
            </div>
        );
    }
}

export default App;
