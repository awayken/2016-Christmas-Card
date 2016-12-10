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
    {
        name: 'Miles',
        pokemon: 'miles'
    },
    {
        name: 'Holli',
        pokemon: 'holli'
    },
    {
        name: 'Ian',
        pokemon: 'ian'
    },
    {
        name: 'Ainsley',
        pokemon: 'ainsley'
    }
];

// Define our component
class App extends Component {
    constructor(props) {
        super(props);

        // Initialize our state
        this.state = {
            activePokemon: 'none',
            caught: [],
            evolved: [],
            family: family
        };

        // Bind our handlers to our class
        this.handleChoice = this.handleChoice.bind(this);
        this.handleEvolve = this.handleEvolve.bind(this);
    }

    // Handle people choosing a Pokémon
    handleChoice(chosenPokemon, e) {
        if ( e ) {
            e.preventDefault();
        }

        // Set the activePokemon state to chosen Pokemon
        this.setState({
            activePokemon: chosenPokemon
        });
    }

    // Handle people evolving a Pokémon
    handleEvolve(evolveToKey, e) {
        if ( e ) {
            e.preventDefault();
        }

        const activePokemon = this.state.activePokemon;
        const family = this.state.family;

        let newFamily = family.map((familyMember) => {
            if ( familyMember.pokemon === activePokemon ) {
                return {
                    name: pokedex[evolveToKey].name,
                    pokemon: evolveToKey
                };
            }

            return familyMember;
        });

        this.setState({
            activePokemon: evolveToKey,
            family: newFamily
        });
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const activePokemon = this.state.activePokemon;

        let chosenPokemon = '';
        if ( activePokemon !== 'none' ) {
            chosenPokemon = pokedex[activePokemon];
        }

        return (
            <div className="app">
                <Chooser
                    choices={this.state.family}
                    activePokemon={activePokemon}
                    caught={this.state.caught}
                    handleChoice={this.handleChoice} />

                {(activePokemon !== 'none') ?
                    <div>
                        <Pokemon
                            cp={chosenPokemon.cp}
                            portrait={chosenPokemon.portrait}
                            name={chosenPokemon.name}
                            stats={chosenPokemon.stats}
                            description={chosenPokemon.description}
                            evolvesInto={chosenPokemon.evolvesInto}
                            catch={chosenPokemon.catch}
                            handleEvolve={this.handleEvolve} />
                        <a className="app--close" href="#close" title="Close" onClick={(e) => this.handleChoice('none', e)}>Close</a>
                    </div>
                : ''}
            </div>
        );
    }
}

export default App;
