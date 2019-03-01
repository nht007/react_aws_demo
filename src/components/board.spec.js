import React from 'react';
import Board from './board';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let squares = [
    {x: 0, y: 0, value: 'X'},
    {x: 1, y: 0, value: null},
    {x: 2, y: 0, value: null},
    {x: 0, y: 1, value: 'X'},
    {x: 1, y: 1, value: 'O'},
    {x: 2, y: 1, value: null},
    {x: 0, y: 2, value: null},
    {x: 1, y: 2, value: null},
    {x: 2, y: 2, value: null},
  ]

  const tree = renderer
    .create(
      <Board
        squares={squares}
        onClick={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
