import Gameboard from "./gameboard";
import Player from "./player";
import Computer from "./computer";
import {
  initGamePage,
  gameboardContainer,
  createGameboard,
  updateGameboard,
  addCellClickListener,
  removeCellClickListener,
  overlayContainers,
  winnerOverlay,
} from "./dom";

const boardSize = 10;
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
const player = new Player("Player", computerGameboard);
const computer = new Computer("Computer", playerGameboard);

let playerTurn = true;

function placePlayerShips(playerShips) {
  for (const shipInfo of playerShips) {
    // placePlayerShip(shipInfo);
    if (
      playerGameboard.isValidPlacement(
        shipInfo.row,
        shipInfo.col,
        shipInfo.length,
        shipInfo.direction,
      )
    ) {
      playerGameboard.placeShip(
        shipInfo.row,
        shipInfo.col,
        shipInfo.length,
        shipInfo.direction,
      );
      updateGameboard(playerGameboard.getBoard(), "playerGameboard");
    }
  }
}

function placeComputerShips() {
  computerGameboard.autoPlaceShips();
  updateGameboard(computerGameboard.getBoard(), "computerGameboard", true);
}

function handlePlayerMove(row, col) {
  if (!playerTurn || playerGameboard.gameover() || computerGameboard.gameover())
    return;

  const attackResult = player.attack(row, col);

  updateGameboard(computerGameboard.getBoard(), "computerGameboard", true);

  if (computerGameboard.gameover()) {
    winnerOverlay("player");
    return;
  }

  if (attackResult === "hit") {
    return;
  }

  playerTurn = false;
  removeCellClickListener();
  overlayContainers();

  setTimeout(() => {
    handleComputerMove();
  }, 1500);
}

function handleComputerMove() {
  if (playerTurn || playerGameboard.gameover() || computerGameboard.gameover())
    return;

  const attackResult = computer.attackRandom();

  updateGameboard(playerGameboard.getBoard(), "playerGameboard");

  if (playerGameboard.gameover()) {
    winnerOverlay("computer");
    return;
  }

  if (attackResult === "hit") {
    setTimeout(() => {
      handleComputerMove();
    }, 2000);
  } else {
    playerTurn = true;
    overlayContainers();
    addCellClickListener(handlePlayerMove);
  }
}

function initGame(playerShips) {
  initGamePage();

  gameboardContainer("playerContainer");
  gameboardContainer("computerContainer");
  createGameboard("playerGameboard", boardSize);
  createGameboard("computerGameboard", boardSize);

  placePlayerShips(playerShips);
  placeComputerShips();

  addCellClickListener(handlePlayerMove);
}

export { handlePlayerMove, initGame };
