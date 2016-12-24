import React, { Component } from 'react';

// Import Styles
import './App.css';

// React Components
import Chooser from './Chooser';
import Page from './Page';
import Pokemon from './Pokemon';

// Pokédex data
import pokedex from './_pokedex';

// Create our family of Pokémon
var family = [
    {
        name: 'Miles',
        pokemon: pokedex.miles.key,
        portrait: pokedex.miles.portrait
    },
    {
        name: 'Holli',
        pokemon: pokedex.holli.key,
        portrait: pokedex.holli.portrait
    },
    {
        name: 'Ian',
        pokemon: pokedex.ian.key,
        portrait: pokedex.ian.portrait
    },
    {
        name: 'Ainsley',
        pokemon: pokedex.ainsley.key,
        portrait: pokedex.ainsley.portrait
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
                    pokemon: pokedex[evolveToKey].key,
                    portrait: pokedex[evolveToKey].portrait
                };
            }

            return familyMember;
        });

        this.setState({
            activePokemon: evolveToKey,
            family: newFamily
        });
    }

    getPokemon( activePokemon ) {
        if ( activePokemon !== 'none' ) {
            let chosenPokemon = pokedex[activePokemon];

            return (
                <Pokemon
                    cp={chosenPokemon.cp}
                    portrait={chosenPokemon.portrait}
                    name={chosenPokemon.name}
                    stats={chosenPokemon.stats}
                    description={chosenPokemon.description}
                    evolvesInto={chosenPokemon.evolvesInto}
                    catch={chosenPokemon.catch}
                    handleEvolve={this.handleEvolve} />
            );
        } else {
            return '';
        }
    }

    render() {
        const activePokemon = this.state.activePokemon;
        const pokemon = this.getPokemon(activePokemon);
        const closeButton = (
            <a className="page--close page--button page--iconbutton page--floating" href="#close" title="Close" onClick={(e) => this.handleChoice('none', e)}>
                <span className="page--icon">&times;</span>
                <span className="visuallyhidden">Close</span>
            </a>
        );

        return (
            <div className="app">
                <Chooser
                    choices={this.state.family}
                    activePokemon={activePokemon}
                    caught={this.state.caught}
                    handleChoice={this.handleChoice} />

                <Page
                    isActive={activePokemon !== 'none'}
                    content={pokemon}
                    button={closeButton} />
            </div>
        );
    }
}

export default App;
