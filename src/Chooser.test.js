import React from 'react';
import ReactDOM from 'react-dom';
import Chooser from './Chooser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chooser />, div);
});
