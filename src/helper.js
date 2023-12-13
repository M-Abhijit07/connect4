export const isWinner = (gameBoard, currentMove, currentPlayer) => {
  let board = [...gameBoard];
  board[currentMove] = currentPlayer;
  const winLines = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    [0, 5, 10, 15],
    [5, 10, 15, 20],
    [1, 6, 11, 16],
    [6, 11, 16, 21],
    [2, 7, 12, 17],
    [7, 12, 17, 22],
    [3, 8, 13, 18],
    [8, 13, 18, 23],
    [4, 9, 14, 19],
    [9, 14, 19, 24],
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [4, 8, 12, 16],
    [8, 12, 16, 20],
    [1, 7, 13, 19],
    [5, 11, 17, 23],
    [3, 7, 11, 15],
    [9, 13, 17, 21],
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [c1, c2, c3, c4] = winLines[i];

    if (
      gameBoard[c1] > 0 &&
      board[c1] === board[c2] &&
      board[c2] === board[c3] &&
      board[c3] === board[c4]
    ) {
      return true;
    }
  }
  return false;
};

export const isDraw = (gameBoard, currentMove, currentPlayer) => {
  let board = [...gameBoard];
  board[currentMove] = currentPlayer;

  let count = board.reduce((n, x) => n + (x === 0), 0);
  console.log("count : " + count);
  return count === 0;
};

const getRandomComputerMove = (gameBoard) => {
  let validMoves = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 0) {
      validMoves.push(i);
    }
  }

  let rndMove = Math.floor(Math.random() * validMoves.length);
  return validMoves[rndMove];
};

const getPosition = (gameBoard, moveChecks) => {
  for (let check = 0; check < moveChecks.length; check++) {
    for (let i = 0; i < moveChecks[check].max; i += moveChecks[check].step) {
      let series =
        gameBoard[i + moveChecks[check].indexes[0]].toString() +
        gameBoard[i + moveChecks[check].indexes[1]].toString() +
        gameBoard[i + moveChecks[check].indexes[2]].toString() +
        gameBoard[i + moveChecks[check].indexes[3]].toString();

      switch (series) {
        case "1110":
        case "2220":
          return i + moveChecks[check].indexes[3];
        case "1101":
        case "2202":
          return i + moveChecks[check].indexes[2];
        case "1011":
        case "2022":
          return i + moveChecks[check].indexes[1];
        case "0111":
        case "0222":
          return i + moveChecks[check].indexes[0];
        default:
      }
    }
  }
  return -1;
};

export const getComputerMove = (gameBoard) => {
  let moveChecks = [
    {
      indexes: [0, 5, 10, 15],
      max: 5,
      step: 1,
    },

    {
      indexes: [5, 10, 15, 20],
      max: 5,
      step: 1,
    },

    {
      indexes: [0, 1, 2, 3],
      max: 25,
      step: 5,
    },

    {
      indexes: [1, 2, 3, 4],
      max: 25,
      step: 5,
    },

    {
      indexes: [0, 6, 12, 18],
      max: 25,
      step: 25,
    },

    {
      indexes: [6, 12, 18, 24],
      max: 25,
      step: 25,
    },

    {
      indexes: [4, 8, 12, 16],
      max: 25,
      step: 25,
    },

    {
      indexes: [8, 12, 16, 20],
      max: 25,
      step: 25,
    },

    {
        indexes: [1,7,13,19],
        max: 25,
        step: 25,
      },

      {
        indexes: [5,11,17,23],
        max: 25,
        step: 25,
      },

      {
        indexes: [3,7,11,15],
        max: 25,
        step: 25,
      },

      {
        indexes: [9,13,17,21],
        max: 25,
        step: 25,
      },
  ];

  let position = getPosition(gameBoard, moveChecks);
  if(position > -1) return position;

  return getRandomComputerMove(gameBoard);
};
