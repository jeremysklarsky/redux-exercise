import { getInitialState } from '../index';

const game = (state = {}, action) => {
  switch (action.type) {
    case 'TAKE_TURN':
      let board = state.board.slice();
      board[action.row][action.column] = state.turn;
      return {
        ...state,
        turn: action.nextTurn
      };
    case 'RESET_BOARD':
      let refreshedState = getInitialState();
      refreshedState.score = state.score; //keep score the same
      refreshedState.gameOver = false;
      return refreshedState;
    case 'LOG_VICTORY':
      let {score} = state;
      score[action.winner]++;
      return {
        ...state,
        score: score,
        gameOver: true
      }
    default:
      return state;
  }
};

export default game;
