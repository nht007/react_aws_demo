import calculateWinner from './calculateWinner';

it('calculates an X winner', () => {
  let squares = [
    {x: 0, y: 0, value: 'X'},
    {x: 1, y: 0, value: 'X'},
    {x: 2, y: 0, value: 'X'},
    {x: 0, y: 1, value: null},
    {x: 1, y: 1, value: 'O'},
    {x: 2, y: 1, value: 'O'},
    {x: 0, y: 2, value: null},
    {x: 1, y: 2, value: null},
    {x: 2, y: 2, value: null},
  ]
  expect(calculateWinner(squares)).toBe('X');
});

it('calculates an O winner', () => {
  let squares = [
    {x: 0, y: 0, value: 'X'},
    {x: 1, y: 0, value: 'X'},
    {x: 2, y: 0, value: null},
    {x: 0, y: 1, value: 'O'},
    {x: 1, y: 1, value: 'O'},
    {x: 2, y: 1, value: 'O'},
    {x: 0, y: 2, value: 'X'},
    {x: 1, y: 2, value: null},
    {x: 2, y: 2, value: null},
  ]
  expect(calculateWinner(squares)).toBe('O');
});

it('calculates no winner', () => {
  let squares = [
    {x: 0, y: 0, value: 'X'},
    {x: 1, y: 0, value: 'O'},
    {x: 2, y: 0, value: 'X'},
    {x: 0, y: 1, value: 'O'},
    {x: 1, y: 1, value: 'X'},
    {x: 2, y: 1, value: 'X'},
    {x: 0, y: 2, value: 'O'},
    {x: 1, y: 2, value: 'X'},
    {x: 2, y: 2, value: 'O'},
  ]
  expect(calculateWinner(squares)).toBe(null);
});
