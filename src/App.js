import React, { Component } from 'react';
import Chooser from './Chooser';
import './App.css';

const pokedex = {
    miles: {
        key: 'miles',
        name: 'Miles'
    },
    miles_evolved: {
        key: 'miles',
        name: 'Kilometers'
    },
    holli: {
        key: 'holli',
        name: 'Holli'
    },
    ian: {
        key: 'ian',
        name: 'Ian'
    },
    ainsley: {
        key: 'ainsley',
        name: 'Ainsley'
    }
};

var family = [
    pokedex.miles,
    pokedex.holli,
    pokedex.ian,
    pokedex.ainsley
];

/*
When the Pokemon array changes, use this to keep state immutable:
handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenValue: 'none', caught: [], evolved: [], family: family };

        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(newValue) {
        this.setState({
            chosenValue: newValue
        });
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <Chooser
                choices={this.state.family}
                chosenValue={this.state.chosenValue}
                caught={this.state.caught}
                // evolved={this.state.evolved}
                handleChoice={this.handleChoice} />
        );
    }
}

export default App;
