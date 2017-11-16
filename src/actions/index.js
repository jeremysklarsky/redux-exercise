export const takeTurn = (coords, turn) => ({
  type: 'TAKE_TURN',
  coords,
  turn
});

export const resetBoard = () => ({
  type: 'RESET_BOARD'
});

export const logVictory = (winner) => ({
  type: 'LOG_VICTORY',
  winner
});
