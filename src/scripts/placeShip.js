import Gameboard from "./gameboard";
import { initPlaceShipPage, gameboardContainer, createGameboard } from "./dom";

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

function clearOverlay() {
  const playerContainer = document.getElementById("playerContainer");
  const overlay = playerContainer.querySelector(".overlay");
  overlay.classList.remove("overlay");
}

function displayMessage(index) {
  const currentShip = listOfShips[index];
  const messageDiv = document.querySelector(".message");
  messageDiv.textContent = `Placing the ${currentShip.name}...`;
}

function createShipElements() {
  const shipsDiv = document.querySelector(".ships");

  listOfShips.forEach((ship) => {
    const img = document.createElement("img");
    img.src = ship.img;
    shipsDiv.appendChild(img);
  });
}

function highlightShip(index) {
  const shipContainer = document.querySelector(".ships");
  const ships = shipContainer.querySelectorAll("img");

  ships[index].classList.add("highlight");

  for (let i = 0; i < index; i++) {
    ships[i].classList.add("fade");
    ships[i].classList.remove("highlight");
  }
}

function changeDirection(direction) {
  const rotateBtn = document.getElementById("rotateShipBtn");

  rotateBtn.addEventListener("click", () => {
    direction = (direction + 1) % 2;

    console.log(direction);
  });
}

function initPlaceShip() {
  let currentIndex = 0; // Track the current ship index
  let shipDirection = 0; // 0 for Horizontal, 1 for Vertical

  initPlaceShipPage();

  gameboardContainer("playerContainer");
  createGameboard("playerGameboard", 10);
  clearOverlay();

  displayMessage(currentIndex); // dependent on currentShip.name
  createShipElements();
  highlightShip(currentIndex); // dependent on currentIndex
  changeDirection(shipDirection);
}

export default initPlaceShip;
