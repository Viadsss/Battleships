import Gameboard from "./gameboard";
import Player from "./player";
import Computer from "./computer";
import {
  gameboardContainer,
  createGameboard,
  updateGameboard,
  addCellClickListener,
  removeCellClickListener,
  overlayContainers,
} from "./dom";

const boardSize = 10;
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
const player = new Player("Player", computerGameboard);
const computer = new Computer("Computer", playerGameboard);
const playerShips = [
  { name: "warship", length: 5 },
  { name: "battleship", length: 4 },
  { name: "submarine", length: 3 },
  { name: "destroyer", length: 3 },
  { name: "cruiser", length: 2 },
];

let playerTurn = true;

function promptCoordinates(shipInfo) {
  while (true) {
    const coordinates = prompt(
      `Enter coordinates for your ${shipInfo.name} with a length of ${shipInfo.length} in a [0-9] by [0-9] grid
      \n[example => 3, 4]:`,
    );
    if (!coordinates) {
      alert("Please enter coordinates for your ship.");
      continue;
    }

    const [x, y] = coordinates
      .split(",")
      .map((coord) => parseInt(coord.trim(), 10));
    if (isNaN(x) || isNaN(y)) {
      alert(
        "Invalid coordinates. Please enter valid numbers seperated by a coma.",
      );
      continue;
    }

    return [x, y];
  }
}

function promptDirection(shipInfo) {
  while (true) {
    const direction = prompt(
      `Enter direction for your ${shipInfo.name} (0 for horizontal, 1 for vertical):`,
    );
    if (direction === "0" || direction === "1") {
      return parseInt(direction);
    }
    alert("Invalid direction");
  }
}

function placePlayerShip(shipInfo) {
  while (true) {
    const [x, y] = promptCoordinates(shipInfo);
    const direction = promptDirection(shipInfo);

    if (playerGameboard.isValidPlacement(x, y, shipInfo.length, direction)) {
      playerGameboard.placeShip(x, y, shipInfo.length, direction);
      updateGameboard(playerGameboard.getBoard(), "playerGameboard");
      return;
    } else {
      alert("Invalid placement. Please try again");
    }
  }
}

function placePlayerShips() {
  for (const shipInfo of playerShips) {
    placePlayerShip(shipInfo);
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
  console.log(
    "Computer Board after player Attacks:",
    computerGameboard.getBoard(),
  );

  if (computerGameboard.gameover()) console.log("Player wins the game!");
  else console.log("Player attacks result:", attackResult);

  if (attackResult === "hit") {
    console.log("Player gets another turn!");
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
  console.log(
    "Player Board after computer Attacks:",
    playerGameboard.getBoard(),
  );

  if (playerGameboard.gameover()) console.log("Computer wins the game!");
  else console.log("Computer attacks result:", attackResult);

  if (attackResult === "hit") {
    console.log("Computer gets another turn!");
    setTimeout(() => {
      handleComputerMove();
    }, 2000);
  } else {
    playerTurn = true;
    overlayContainers();
    addCellClickListener(handlePlayerMove);
  }
}

function initGame() {
  gameboardContainer("playerContainer");
  gameboardContainer("computerContainer");
  createGameboard("playerGameboard", boardSize);
  createGameboard("computerGameboard", boardSize);

  placePlayerShips();
  placeComputerShips();

  addCellClickListener(handlePlayerMove);
}


export { handlePlayerMove, initGame };
