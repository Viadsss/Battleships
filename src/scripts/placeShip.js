import Gameboard from "./gameboard";
import {
  initPlaceShipPage,
  gameboardContainer,
  createGameboard,
  updateGameboard,
} from "./dom";

const playerGameboard = new Gameboard();
const listOfShips = [
  {
    name: "Aircraft Carrier",
    length: 5,
    img: "../../dist/assets/ships/ship-5.png",
  },
  { name: "Destroyer", length: 4, img: "../../dist/assets/ships/ship-4.png" },
  { name: "Battleship", length: 3, img: "../../dist/assets/ships/ship-3.png" },
  { name: "Destroyer", length: 3, img: "../../dist/assets/ships/ship-2.png" },
  { name: "Cruiser", length: 2, img: "../../dist/assets/ships/ship-1.png" },
];

let currentIndex = 0; // Track the current ship index
let currentDirection = 0; // 0 for Horizontal, 1 for Vertical

function clearOverlay() {
  const playerContainer = document.getElementById("playerContainer");
  const overlay = playerContainer.querySelector(".overlay");
  overlay.classList.remove("overlay");
}

function displayMessage() {
  const currentShip = listOfShips[currentIndex];
  const messageDiv = document.querySelector(".message");

  if (currentIndex > 4) {
    messageDiv.textContent = `Lets Play the Game Now!`;
  } else {
    messageDiv.textContent = `Placing the ${currentShip.name}...`;
  }
}

function createShipElements() {
  const shipsDiv = document.querySelector(".ships");

  listOfShips.forEach((ship) => {
    const img = document.createElement("img");
    img.src = ship.img;
    shipsDiv.appendChild(img);
  });
}

function highlightShip() {
  const shipContainer = document.querySelector(".ships");
  const ships = shipContainer.querySelectorAll("img");

  if (currentIndex > 4) {
    ships[currentIndex - 1].classList.remove("highlight");
    ships[currentIndex - 1].classList.add("fade");
  } else {
    ships[currentIndex].classList.add("highlight");
  }

  for (let i = 0; i < currentIndex; i++) {
    ships[i].classList.add("fade");
    ships[i].classList.remove("highlight");
  }
}

function changeDirection() {
  const rotateBtn = document.getElementById("rotateShipBtn");

  rotateBtn.addEventListener("click", () => {
    currentDirection = (currentDirection + 1) % 2;
  });
}

// cells hovering related functions

function addCellListeners() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => handleCellHover(cell));
    cell.addEventListener("click", () => handleCellClick(cell));
  });
}

function handleCellClick(cell) {
  if (currentIndex > 4) return;

  const dataRow = parseInt(cell.dataset.row, 10);
  const dataCol = parseInt(cell.dataset.col, 10);

  const shipLength = listOfShips[currentIndex].length;
  const shipDirection = currentDirection;

  if (
    playerGameboard.isValidPlacement(
      dataRow,
      dataCol,
      shipLength,
      shipDirection,
    )
  ) {
    playerGameboard.placeShip(dataRow, dataCol, shipLength, shipDirection);
    updateGameboard(playerGameboard.getBoard(), "playerGameboard");

    currentIndex++;

    clearCellHighlights();
    displayMessage();
    highlightShip();
  }
}

function handleCellHover(cell) {
  if (currentIndex > 4) return;

  const dataRow = parseInt(cell.dataset.row, 10);
  const dataCol = parseInt(cell.dataset.col, 10);

  const shipLength = listOfShips[currentIndex].length;
  const shipDirection = currentDirection;

  if (
    playerGameboard.isValidPlacement(
      dataRow,
      dataCol,
      shipLength,
      shipDirection,
    )
  ) {
    highlightCell(dataRow, dataCol);
  } else {
    clearCellHighlights();
    cell.classList.add("invalid-cell");
  }
}

function highlightCell(row, col) {
  const currentShip = listOfShips[currentIndex];
  const cellsToHighlight = getCellsToHighlight(
    row,
    col,
    currentShip.length,
    currentDirection,
  );

  clearCellHighlights();

  cellsToHighlight.forEach((cell) => {
    cell.classList.add("hovered-cell");
  });
}

function getCellsToHighlight(row, col, shipLength) {
  const cells = document.querySelectorAll(".cell");
  const cellsToHighlight = [];

  for (let i = 0; i < shipLength; i++) {
    let cellIndex;

    if (currentDirection === 0) {
      cellIndex = parseInt(`${row}${col}`) + i;
    } else if (currentDirection === 1) {
      cellIndex = i * 10 + parseInt(`${row}${col}`);
    }

    cellsToHighlight.push(cells[cellIndex]);
  }
  return cellsToHighlight;
}

function clearCellHighlights() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.classList.remove("hovered-cell");
    cell.classList.remove("invalid-cell");
  });
}

function initPlaceShip() {
  initPlaceShipPage();

  gameboardContainer("playerContainer");
  createGameboard("playerGameboard", 10);
  clearOverlay();

  displayMessage();
  createShipElements();
  highlightShip();
  changeDirection();

  addCellListeners();
}

export default initPlaceShip;
