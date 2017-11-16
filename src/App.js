import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
// import checkTicTacToe from './checkTicTacToe';
import Board from './containers/board';
import Scoreboard from './components/scoreboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetBoard, logVictory } from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Reset',
      gameOver: false
    };
  }

  resetBoard(){
    this.props.resetBoard();
    this.setState({label:'Reset'});
  }

  handleWinner(winner) {
    this.props.logVictory(winner);
    this.setState({label: `${winner} wins!`});
  }

  handleTie() {
    this.setState({label:'Tie Game!'});
  }

  render() {
    let {board,score} = this.props;
    return (
      <div className="App">
        <Button
          className="reset"
          onClick={()=>this.resetBoard()}>
          {this.state.label}
        </Button>

        <Board onTie={()=>this.handleTie()} onWinning={(winner)=>this.handleWinner(winner)} board={board} />

        <Scoreboard score={score}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    board: state.board,
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetBoard: resetBoard,
    logVictory: logVictory
  }, dispatch);
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
