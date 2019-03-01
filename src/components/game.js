import React from 'react';
import { connect } from 'react-redux';

import Board from './board';
import * as types from '../constants/ActionTypes';
import calculateWinner from '../constants/calculateWinner';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(squareNumber) {
    this.props.move(squareNumber);
  }

  jumpTo(stepNumber) {
    this.props.jump(stepNumber);
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      const square = step.squares[step.squareNumber];
      let coordinates, xCoord, yCoord;

      if (square) {
        xCoord = step.squares[step.squareNumber].x;
        yCoord = step.squares[step.squareNumber].y;
        coordinates = '(' + xCoord + ', ' + yCoord + ')';
      }

      const selected = this.props.stepNumber === move ? 'selected' : '';

      return (
        <li key={move}>
          {coordinates}
          <button className={selected} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
  }
};

const mapDispatchToProps = dispatch => ({
  move: (squareNumber) =>
    dispatch({ type: types.MOVE, squareNumber: squareNumber }),
  jump: (stepNumber) =>
    dispatch({ type: types.JUMP, stepNumber: stepNumber })
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
