import React, { Component } from 'react';

// Import Styles
import './App.css';

// React Components
import Chooser from './Chooser';
import Page from './Page';
import Catcher from './Catcher';
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
            isAnimatingCatch: false,
            isCatching: false,
            isEvolving: false,
            family: family
        };

        // Bind our handlers to our class
        this.handleChoice = this.handleChoice.bind(this);
        this.handleCatch = this.handleCatch.bind(this);
        this.handleEvolve = this.handleEvolve.bind(this);
    }

    // Handle people choosing a Pokémon
    handleChoice(chosenPokemon, e) {
        if ( e ) {
            e.preventDefault();
        }

        const caught = this.state.caught;

        // Set the activePokemon state to chosen Pokemon
        this.setState({
            activePokemon: chosenPokemon,
            isCatching: caught.indexOf(chosenPokemon) === -1
        });
    }

    // Handle people catching a Pokémon
    handleCatch(e) {
        if ( e ) {
            e.preventDefault();
        }

        this.setState({
            isAnimatingCatch: true
        });

        window.setTimeout(() => {
            const activePokemon = this.state.activePokemon;
            let caught = this.state.caught;
            caught.push(activePokemon);

            // Stop catching
            this.setState({
                caught: caught,
                isAnimatingCatch: false,
                isCatching: false
            });
        }, 850);
    }

    // Handle people evolving a Pokémon
    handleEvolve(evolveToKey, e) {
        if ( e ) {
            e.preventDefault();
        }

        this.setState({
            isEvolving: true
        });

        window.setTimeout(() => {
            this.evolvePokemon(evolveToKey);
        }, 600);
    }

    // Evolve our Pokémon
    evolvePokemon(evolveToKey) {
        const activePokemon = this.state.activePokemon;
        const caught = this.state.caught;
        const family = this.state.family;

        let newFamily = family.map((familyMember) => {
            if ( familyMember.pokemon === activePokemon ) {
                caught.push(pokedex[evolveToKey].key);

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
            caught: caught,
            isEvolving: false,
            family: newFamily
        });
    }

    // Get Pokémon component using activePokemon data
    getPokemon(activePokemon) {
        const isEvolving = this.state.isEvolving;

        if ( activePokemon !== 'none' ) {
            let chosenPokemon = pokedex[activePokemon];

            return (
                <Pokemon
                    isEvolving={isEvolving}
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

    // Get Catcher screen based on activePokemon
    getCatchScreen(activePokemon) {
        if (activePokemon !== 'none') {
            const isAnimatingCatch = this.state.isAnimatingCatch;
            const chosenPokemon = pokedex[activePokemon];

            return (
                <Catcher
                    quarryName={chosenPokemon.key}
                    quarry={chosenPokemon.portrait}
                    isAnimatingCatch={isAnimatingCatch}
                    handleCatch={this.handleCatch} />
            );
        } else {
            return '';
        }
    }

    // Render our App component
    render() {
        const activePokemon = this.state.activePokemon;
        const isEvolving = this.state.isEvolving;
        const isCatching = this.state.isCatching;

        let closeClass = `page--button page--iconbutton page--floating `;
        if (isCatching) {
            closeClass += `page--escape`;
        } else {
            closeClass += `page--close`;
        }

        const closeButton = (
            <a className={closeClass} href="#close" title="Close" onClick={(e) => this.handleChoice('none', e)}>
                <span className="page--icon">×</span>
                <span className="visuallyhidden">Close</span>
            </a>
        );

        const pokemon = this.getPokemon(activePokemon);
        const catchScreen = this.getCatchScreen(activePokemon);

        return (
            <div className="app">
                <Chooser
                    choices={this.state.family}
                    activePokemon={activePokemon}
                    caught={this.state.caught}
                    handleChoice={this.handleChoice} />

                <Page
                    isEvolving={isEvolving}
                    isActive={activePokemon !== 'none'}
                    content={isCatching ? catchScreen : pokemon}
                    button={closeButton} />
            </div>
        );
    }
}

export default App;
