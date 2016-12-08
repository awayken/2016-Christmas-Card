import React, { Component } from 'react';
import './Chooser.css';

class Choice extends Component {
    render() {
        const title = `A Wild ${this.props.data.name}`;

        return (
            <a href="#" className="chooser--choice" title={ this.props.isCaught ? 'View ' + title : 'Catch ' + title } onClick={(e) => this.props.handleChoice(this.props.data.key, e)}>
                {title}
            </a>
        );
    }
}

class Chooser extends Component {
    render() {
        const chooserItems = this.props.choices.map((choice) =>
            <Choice key={choice.key} data={choice} isCaught={ this.props.caught.indexOf(choice.key) > -1 } handleChoice={this.props.handleChoice} />
        );

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
