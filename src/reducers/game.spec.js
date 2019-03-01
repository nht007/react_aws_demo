import game from './game';
import * as types from '../constants/ActionTypes';
import { initialState } from '../constants/initialState';

describe('game reducer', () => {
  it('should handle initial state', () => {
    expect(
      game(undefined, {})
    ).toEqual(initialState)
  });

  it('should handle MOVE to an empty square', () => {
    const squareNumber = 1;
    const resultState = game(initialState, {
      type: types.MOVE,
      squareNumber: squareNumber
    });
    const history = resultState.history;
    const lastTurn = history[history.length - 1];
    const square = lastTurn.squares[squareNumber];
    expect(square.value).toEqual('X');
  });

  it('should handle MOVE to an occupied square', () => {
    const squareNumber = 1;
    const state = {
      history: [{
        squares: [
          {x: 0, y: 0, value: null},
          {x: 1, y: 0, value: 'X'},
          {x: 2, y: 0, value: null},
          {x: 0, y: 1, value: null},
          {x: 1, y: 1, value: null},
          {x: 2, y: 1, value: null},
          {x: 0, y: 2, value: null},
          {x: 1, y: 2, value: null},
          {x: 2, y: 2, value: null},
        ],
      }],
      stepNumber: 1,
      xIsNext: false,
    };
    const resultState = game(state, {
      type: types.MOVE,
      squareNumber: squareNumber
    });
    const history = resultState.history;
    const lastTurn = history[history.length - 1];
    const square = lastTurn.squares[squareNumber];

    expect(square.value).toEqual('X');
    expect(history.length).toEqual(1);
  });

  it('should handle MOVE if there is a winner', () => {
    const squareNumber = 6;
    const state = {
      history: [{
        squares: [
          {x: 0, y: 0, value: 'X'},
          {x: 1, y: 0, value: 'X'},
          {x: 2, y: 0, value: 'X'},
          {x: 0, y: 1, value: 'O'},
          {x: 1, y: 1, value: 'O'},
          {x: 2, y: 1, value: null},
          {x: 0, y: 2, value: null},
          {x: 1, y: 2, value: null},
          {x: 2, y: 2, value: null},
        ],
      }],
      stepNumber: 5,
      xIsNext: false,
    };
    const resultState = game(state, {
      type: types.MOVE,
      squareNumber: squareNumber
    });
    const history = resultState.history;
    const lastTurn = history[history.length - 1];
    const square = lastTurn.squares[squareNumber];

    expect(square.value).toEqual(null);
    expect(history.length).toEqual(1);
  });
});
