import React, { Component } from 'react';
import '../App.css';
import Square from './square';

class Board extends Component {

  render() {
    let { board,handleClick,disabled } = this.props;
    return(
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((square, columnIndex)=>{
                return (
                  <Square 
                    disabled={Boolean(square) || disabled}
                    key={columnIndex}
                    label={square}
                    coords={[rowIndex, columnIndex]}
                    handleClick={handleClick}/>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Board
