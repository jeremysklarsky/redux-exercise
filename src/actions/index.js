export const takeTurn = (coords, nextTurn) => ({
  type: 'TAKE_TURN',
  coords,
  nextTurn
});

export const resetBoard = () => ({
  type: 'RESET_BOARD'
});

export const logVictory = (winner) => ({
  type: 'LOG_VICTORY',
  winner
});
