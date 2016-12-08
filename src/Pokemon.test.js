import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {
      name: 'Miles'
  };

  ReactDOM.render(<Pokemon pokemon={data} />, div);
});
