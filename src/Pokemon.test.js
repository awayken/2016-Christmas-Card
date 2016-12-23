import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Pokemon
      cp="100"
      portrait="image.png"
      name="Miles"
      stats={{
          height: "1.0m",
          type: "fire",
          weight: "40km"
      }}
      description="This is a thing."
      catch={{
          location: "Sioux Falls",
          date: "12/2/2016"
      }} />, div);
});
