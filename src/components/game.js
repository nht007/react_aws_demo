import React from 'react';
import Board from './board';
import calculateWinner from '../constants/calculateWinner';
import { initialState } from '../constants/initialState';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.map(square => {
      return Object.assign({}, square);
    });
    if (calculateWinner(squares) || squares[i].value) {
      return;
    }
    squares[i].value = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squareNumber: i,
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
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

      const selected = this.state.stepNumber === move ? 'selected' : '';

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
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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
