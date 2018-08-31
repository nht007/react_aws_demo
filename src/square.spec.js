import React from 'react';
import Square from './square';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Square value="X" onClick={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
