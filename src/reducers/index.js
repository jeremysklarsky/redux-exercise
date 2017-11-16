import { combineReducers } from "redux";

const blankBoard = () => [["", "", ""], ["", "", ""], ["", "", ""]];

const board = (state = blankBoard(), action) => {
  switch (action.type) {
    case 'TAKE_TURN':
      let {turn,coords} = action;
      let arr = JSON.parse(JSON.stringify(state));
      let row = coords[0];
      let column = coords[1];
      arr[row][column] = turn
      return arr;
    case 'RESET_BOARD':
      return blankBoard();
    default:
      return state;
  }
};

const turn = (state = 'X', action) => {
  switch (action.type) {
    case 'TAKE_TURN':
      return state === 'X' ? 'O' : 'X';
    case 'RESET_BOARD':
      return 'X';
    default:
      return state;
  }
}
 
const score = (state = {X: 0, O:0}, action) => {
  switch (action.type) {
    case 'LOG_VICTORY':
      let score = Object.assign({}, state);
      score[action.winner]++;
      return score;
    default:
      return state;
  }
}

const gameOver = (state = false, action) => {
  switch (action.type) {
    case "LOG_VICTORY":
      return true;
    case "RESET_BOARD":
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board,
  turn,
  score,
  gameOver
});

export default rootReducer;
