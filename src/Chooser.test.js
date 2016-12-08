import React from 'react';
import ReactDOM from 'react-dom';
import Chooser from './Chooser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const choices = [
      {
          name: 'Miles',
          key: 'miles'
      }
  ];

  ReactDOM.render(<Chooser choices={choices} caught='' />, div);
});
