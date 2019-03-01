import * as types from '../constants/ActionTypes';
import calculateWinner from '../constants/calculateWinner';
import { initialState } from '../constants/initialState';

export default function game(state = initialState, action) {
  switch (action.type) {
    case types.MOVE:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.map(square => {
        return Object.assign({}, square);
      });

      if (calculateWinner(squares) || squares[action.squareNumber].value) {
        return state;
      }

      squares[action.squareNumber].value = state.xIsNext ? 'X' : 'O';

      return {
        history: history.concat([{
          squareNumber: action.squareNumber,
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
      };

    case types.JUMP:
      return {
        history: state.history,
        stepNumber: action.stepNumber,
        xIsNext: (action.stepNumber % 2) === 0,
      };

    default:
      return state;
  }
};
