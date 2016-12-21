import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const pokemonClass = `pokemon pokemon--${this.props.stats.type}`;
        const typeClass = `pokemon--statvalue pokemon--${this.props.stats.type}text`;

        return (
            <article className={pokemonClass}>
                <header className="pokemon--header">
                    <span className="pokemon--cp"><small>CP</small>{this.props.cp}</span>
                    <img className="pokemon--portrait" src={this.props.portrait} alt={'Portrait of ' + this.props.name} />
                </header>

                <main className="pokemon--page">
                    <h1 className="pokemon--name">{this.props.name}</h1>

                    <ul className="pokemon--stats pokemon--panel">
                        <li className="pokemon--stat">
                            <span className="pokemon--statvalue">{this.props.stats.height}</span>
                            <small className="pokemon--statname">Height</small>
                        </li>
                        <li className="pokemon--stat">
                            <span className={typeClass}>{this.props.stats.type}</span>
                            <small className="pokemon--statname">Type</small>
                        </li>
                        <li className="pokemon--stat">
                            <span className="pokemon--statvalue">{this.props.stats.weight}</span>
                            <small className="pokemon--statname">Weight</small>
                        </li>
                    </ul>

                    <p className="pokemon--description pokemon--panel">{this.props.description}</p>

                    { this.props.evolvesInto ?
                        <div className="pokemon--panel">
                            <a className="pokemon--evolve" href="#evolve" onClick={(e) => this.props.handleEvolve(this.props.evolvesInto, e)}>
                                <span className="app--button">Evolve</span>
                                <span className="pokemon--evolvename">{this.props.name}</span>
                            </a>
                        </div>
                    : ''}

                    <footer className="pokemon--catch pokemon--panel">
                        <div className="pokemon--location">{this.props.catch.location}</div>
                        <small className="pokemon--date">{this.props.catch.date}</small>
                    </footer>
                </main>
            </article>
        );
    }
}

export default Pokemon;
