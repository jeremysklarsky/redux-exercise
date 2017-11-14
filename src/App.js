import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import checkTicTacToe from './checkTicTacToe';
import Board from './components/board';
import Scoreboard from './components/scoreboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeTurn, resetBoard, logVictory } from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Reset'
    };
  }

  handleClick(row, column) {
    let nextTurn = this.props.turn === 'X' ? 'O' : 'X';
    let winner;
    this.props.takeTurn(row, column, nextTurn);

    winner = checkTicTacToe(this.props.board);
    if (winner) {
      this.setState({label: `${winner} wins!`});
      this.props.logVictory(winner);
    }    
  }

  resetBoard(){
    this.props.resetBoard();
    this.setState({label:'Reset'});
  }

  render() {
    let {board,gameOver,score} = this.props;
    return (
      <div className="App">
        <Button
          className="reset"
          onClick={()=>this.resetBoard()}>
          {this.state.label}
        </Button>

        <Board disabled={gameOver} board={board} handleClick={(row, column)=>this.handleClick(row, column)}/>

        <Scoreboard score={score}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    board: state.board,
    turn: state.turn,
    score: state.score,
    gameOver: state.gameOver
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    takeTurn: takeTurn,
    resetBoard: resetBoard,
    logVictory: logVictory
  }, dispatch);
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
