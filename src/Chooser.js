import React, { Component } from 'react';
import './Chooser.css';

class Choice extends Component {
    render() {
        const title = `A Wild ${this.props.name}`;

        return (
            <a
                href="#"
                className="chooser--choice"
                title={ this.props.isCaught ? 'View ' + title : 'Catch ' + title }
                onClick={(e) => this.props.handleChoice(this.props.pokemon, e)}>
                    {title}
            </a>
        );
    }
}

class Chooser extends Component {
    render() {
        const chooserItems = this.props.choices.map((choice) => {
            return (
                <Choice
                    key={choice.pokemon}
                    pokemon={choice.pokemon}
                    name={choice.name}
                    isCaught={ this.props.caught.indexOf(choice.pokemon) > -1 }
                    handleChoice={this.props.handleChoice} />
            );
        });

        return (
            <div className="chooser">
                <nav className="chooser--choices">
                    {chooserItems}
                </nav>
            </div>
        );
    }
}

export default Chooser;
