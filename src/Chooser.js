import React, { Component } from 'react';

class Choice extends Component {
    render() {
        const title = `A Wild ${this.props.name}`;

        return (
            <a
                href="#"
                className="chooser--choice"
                title={ this.props.isCaught ? 'View ' + title : 'Catch ' + title }
                onClick={(e) => this.props.handleChoice(this.props.pokemon, e)}>
                    <img className="chooser--portrait" src={this.props.portrait} alt={`A portrait of ${this.props.name}.`} />
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
                    portrait={choice.portrait}
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
