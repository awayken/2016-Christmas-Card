import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    render() {
        return (
            <article className="pokemon">
                <header className="pokemon--header">
                    <span className="pokemon--cp">{this.props.cp}</span>
                    <img className="pokemon--portrait" src={this.props.portrait} alt={'Portrait of ' + this.props.name} />
                </header>

                <main className="pokemon--page">
                    <h1 className="pokemon--name">{this.props.name}</h1>

                    <ul className="pokemon--stats">
                        <li className="pokemon--stat">{this.props.stats.height}</li>
                        <li className="pokemon--stat">{this.props.stats.type}</li>
                        <li className="pokemon--stat">{this.props.stats.weight}</li>
                    </ul>

                    <p className="pokemon--description">{this.props.description}</p>

                    evolve button

                    <footer className="pokemon--catch">
                        <div className="pokemon--location">{this.props.catch.location}</div>
                        <small className="pokemon--date">{this.props.catch.date}</small>
                    </footer>
                </main>
            </article>
        );
    }
}

export default Pokemon;
