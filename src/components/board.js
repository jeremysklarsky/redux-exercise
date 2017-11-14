import React, { Component } from 'react';
import '../App.css';
import Button from 'antd/lib/button';

class Board extends Component {

  render() {
    let { board,handleClick } = this.props;
    return(
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((square, columnIndex)=>{
                return (
                  <Button
                    className="square"
                    disabled={Boolean(square) || this.props.disabled}
                    key={columnIndex}
                    onClick={() => handleClick(rowIndex, columnIndex)}
                    type="primary">
                    {square || '\0'}
                  </Button>
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
