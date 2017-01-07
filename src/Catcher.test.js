import React from 'react';
import ReactDOM from 'react-dom';
import Catcher from './Catcher';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Catcher quarryName="ian" quarry="http://placehold.it/400x400/" />, div);
});
