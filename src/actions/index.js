export const takeTurn = (row, column, nextTurn) => ({
  type: 'TAKE_TURN',
  row,
  column,
  nextTurn
});

export const resetBoard = () => ({
  type: 'RESET_BOARD'
});

export const logVictory = (winner) => ({
  type: 'LOG_VICTORY',
  winner
});
