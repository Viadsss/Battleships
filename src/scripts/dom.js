import { handlePlayerMove } from "./game";
// importing for the callback of clickHandler to response for Player Move

function gameboardContainer(id) {
  const container = document.getElementById(id);
  const info = document.createElement("div");

  if (container.id === "playerContainer") {
    info.classList.add("info-player");
    info.textContent = "YOUR FLEET";
  } else if (container.id === "computerContainer") {
    info.classList.add("info-computer");
    info.textContent = "OPPONENT";
  }

  const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const letters = document.createElement("div");
  letters.classList.add("letters");

  for (const letterText of lettersArr) {
    const letterDiv = document.createElement("div");
    letterDiv.classList.add("letter");
    letterDiv.textContent = letterText;
    letters.appendChild(letterDiv);
  }

  const numbers = document.createElement("div");
  numbers.classList.add("numbers");

  for (let i = 1; i <= 10; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = i.toString();
    numbers.appendChild(number);
  }

  const gameboard = document.createElement("div");
  gameboard.classList.add("gameboard");

  if (container.id === "playerContainer") {
    gameboard.id = "playerGameboard";
  } else if (container.id === "computerContainer") {
    gameboard.id = "computerGameboard";
  }

  container.appendChild(info);
  container.appendChild(letters);
  container.appendChild(numbers);
  container.appendChild(gameboard);
}

function createGameboard(id, size) {
  const gameboard = document.getElementById(id);

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("board-row");
    gameboard.appendChild(row);

    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;

      row.appendChild(cell);
    }
  }
}

function updateGameboard(board, id, hideShips = false) {
  const gameboard = document.getElementById(id);

  if (gameboard) {
    const cells = gameboard.querySelectorAll(".cell");

    cells.forEach((cell) => {
      const row = parseInt(cell.dataset.row, 10);
      const col = parseInt(cell.dataset.col, 10);

      cell.textContent = board[row][col];
    });
  }
}

function clickHandler(e) {
  console.log(e.target);
  if (e.target.classList.contains("cell")) {
    const cell = e.target;
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    // Check if the cell has already been clicked
    if (!cell.classList.contains("clicked")) {
      // lets try to add && if playerTurn
      console.log("Row:", row, "Col:", col);
      handlePlayerMove(row, col); // callback
      cell.classList.add("clicked"); // Mark the cell as clicked
    }
  }
}

// Function to add the click event listener
function addCellClickListener() {
  const computerGameboard = document.getElementById("computerGameboard");

  if (computerGameboard) {
    computerGameboard.addEventListener("click", clickHandler);
  }
}

// Function to remove the click event listener
function removeCellClickListener() {
  const computerGameboard = document.getElementById("computerGameboard");

  if (computerGameboard) {
    computerGameboard.removeEventListener("click", clickHandler);
    console.log("Should remove the event Listener clickHandler");
    console.log(computerGameboard);
  }
}

export {
  gameboardContainer,
  createGameboard,
  updateGameboard,
  addCellClickListener,
  removeCellClickListener,
};
