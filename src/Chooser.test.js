import React from 'react';
import ReactDOM from 'react-dom';
import Chooser from './Chooser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const choices = [
      {
          name: 'Miles',
          pokemon: 'miles'
      },
      {
          name: 'Holli',
          pokemon: 'holliweather'
      },
      {
          name: 'Ian',
          pokemon: 'ian'
      },
      {
          name: 'Ainsley',
          pokemon: 'ellie'
      }
  ];

  ReactDOM.render(<Chooser choices={choices} caught='' />, div);
});
