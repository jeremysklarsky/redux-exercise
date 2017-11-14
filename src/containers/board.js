import React, { Component } from 'react';
import '../App.css';
import Square from '../components/square';
import checkTicTacToe from '../checkTicTacToe';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeTurn } from '../actions';

const isBoardFull = function(board) {
  return board.every(function(row){
    return row.every(function(square){
      return Boolean(square);
    });
  });
};

class Board extends Component {

  handleClick(coords) {
    let {board,takeTurn,turn,onWinning,onTie} = this.props; 
    let nextTurn = turn === 'X' ? 'O' : 'X';
    let winner;
    
    takeTurn(coords, nextTurn);

    winner = checkTicTacToe(board);
    if (winner) {
      onWinning(winner);
    } else if (isBoardFull(board)){
      onTie();
    }
  }

  render() {
    let { board, gameOver } = this.props;
    return(
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((square, columnIndex)=>{
                return (
                  <Square 
                    disabled={Boolean(square) || gameOver}
                    key={columnIndex}
                    label={square}
                    coords={[rowIndex, columnIndex]}
                    handleClick={(coords)=>this.handleClick(coords)}/>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

// export default Board
const mapStateToProps = (state) => { 
  return {
    turn: state.turn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    takeTurn: takeTurn,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
