import { handlePlayerMove } from "./game";
// importing for the callback of clickHandler to response for Player Move

const assets = {
  ship: "assets/ship.svg",
  hit: "assets/hit.svg",
  miss: "assets/miss.svg",
  sunk: "assets/sunk.svg",
  logoImg: "assets/battleship-logo.png",
  logoText: "assets/battleship-text-logo.svg",
  githubLogo: "assets/github-logo.svg",
};

function handlePageTransition() {
  const main = document.querySelector(".main");

  main.classList.add("animate");
  if (main.classList.contains("animate")) {
    main.addEventListener("animationend", () => {
      main.classList.remove("animate");
      return true;
    });
  }
}

function initLoadingPage() {
  handlePageTransition();

  const main = document.querySelector(".main");
  const loadingContainer = document.createElement("div");
  const titleText = document.createElement("p");
  const titleImg = document.createElement("img");
  const loadingBar = document.createElement("div");
  const loadingStatus = document.createElement("div");
  const loadingText = document.createElement("p");

  main.classList.add("darken");
  main.appendChild(loadingContainer);
  loadingContainer.id = "loadingContainer";

  titleText.textContent = "THE CLASSIC NAVAL COMBAT GAME";
  titleText.classList.add("title-text");

  titleImg.src = assets.logoText;
  titleImg.classList.add("title-img");

  loadingBar.classList.add("loading-bar");
  loadingStatus.classList.add("loading-status");
  loadingBar.appendChild(loadingStatus);

  loadingText.textContent = "LOADING...";
  loadingText.classList.add("loading-text");

  loadingContainer.appendChild(titleText);
  loadingContainer.appendChild(titleImg);
  loadingContainer.appendChild(loadingBar);
  loadingContainer.appendChild(loadingText);
}

function initPlaceShipPage() {
  handlePageTransition();

  const main = document.querySelector(".main");
  const playerContainer = document.createElement("div");
  const shipsContainer = document.createElement("div");
  const messageDiv = document.createElement("div");
  const shipsDiv = document.createElement("div");
  const rotateShipBtn = document.createElement("button");

  playerContainer.classList.add("gameboard-container");
  playerContainer.id = "playerContainer";

  shipsContainer.classList.add("ships-container");
  shipsContainer.id = "shipsContainer";

  main.textContent = "";

  main.classList.remove("darken");
  main.appendChild(playerContainer);
  main.appendChild(shipsContainer);

  messageDiv.classList.add("message");
  shipsDiv.classList.add("ships");
  rotateShipBtn.classList.add("rotate-btn");
  rotateShipBtn.id = "rotateShipBtn";
  rotateShipBtn.textContent = "Rotate ship";

  shipsContainer.appendChild(messageDiv);
  shipsContainer.appendChild(shipsDiv);
  shipsContainer.appendChild(rotateShipBtn);
}

function initGamePage() {
  handlePageTransition();

  const main = document.querySelector(".main");
  const playerContainer = document.createElement("div");
  const computerContainer = document.createElement("div");

  playerContainer.classList.add("gameboard-container");
  computerContainer.classList.add("gameboard-container");

  playerContainer.id = "playerContainer";
  computerContainer.id = "computerContainer";

  main.textContent = "";

  main.appendChild(playerContainer);
  main.appendChild(computerContainer);
}

function winnerOverlay(winner) {
  const main = document.querySelector(".main");
  const winnerOverlay = document.createElement("div");
  const winnerContainer = document.createElement("div");

  winnerOverlay.classList.add("winner-overlay");
  
  winnerContainer.classList.add("winner-container");

  if (winner === "player") {
    winnerContainer.textContent = "🎊🎉 Congrats! You Win!😊 🎉🎊";
  } else if (winner === "computer") {
    winnerContainer.textContent = "You Lost 😞😥 Better Luck next time!🍀";
  }

  main.appendChild(winnerOverlay);
  winnerOverlay.appendChild(winnerContainer);

}

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

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  if (container.id === "computerContainer") {
    overlay.classList.add("hide");
  }

  container.appendChild(info);
  container.appendChild(letters);
  container.appendChild(numbers);
  container.appendChild(gameboard);
  container.appendChild(overlay);
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

      if (id === "computerGameboard") {
        cell.classList.add("computer-cell");
      }

      cell.dataset.row = i;
      cell.dataset.col = j;

      row.appendChild(cell);
    }
  }
}

function updateGameboard(board, id, hideShips = false) {
  const gameboard = document.getElementById(id);

  const cells = gameboard.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    const img = document.createElement("img");

    cell.innerHTML = "";

    // computer Board
    if (hideShips) {
      if (board[row][col] === "SHIP") {
        // display nothing on ship
      } else if (board[row][col] === "miss") {
        img.src = assets.miss;
        img.alt = "miss";
      } else if (board[row][col] === "hit") {
        img.src = assets.hit;
        img.alt = "hit";
      } else if (board[row][col] === "sunk") {
        img.src = assets.sunk;
        img.alt = "sunk";
        img.classList.add("sunk");
      }

      // player Board
    } else {
      if (board[row][col] === "SHIP") {
        img.src = assets.ship;
        img.alt = "SHIP";
        img.classList.add("ship");
      } else if (board[row][col] === "hit") {
        img.src = assets.sunk; // to make the hit overlay the ship
        img.alt = "hit";
      } else if (board[row][col] === "miss") {
        img.src = assets.miss;
        img.alt = "miss";
      } else if (board[row][col] === "sunk") {
        img.src = assets.sunk;
        img.alt = "sunk";
        img.classList.add("sunk");
      }
    }

    cell.appendChild(img);
  });
}

function clickHandler(e) {
  if (e.target.classList.contains("cell")) {
    const cell = e.target;
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    if (!cell.classList.contains("clicked")) {
      handlePlayerMove(row, col); // callback
      cell.classList.add("clicked");
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
  }
}

function overlayContainers() {
  setTimeout(() => {
    const playerContainer = document.getElementById("playerContainer");
    const computerContainer = document.getElementById("computerContainer");
    const playerOverlay = playerContainer.querySelector(".overlay");
    const computerOverlay = computerContainer.querySelector(".overlay");

    playerOverlay.classList.toggle("hide");
    computerOverlay.classList.toggle("hide");
  }, 500);
}

export {
  initPlaceShipPage,
  initGamePage,
  gameboardContainer,
  createGameboard,
  updateGameboard,
  addCellClickListener,
  removeCellClickListener,
  overlayContainers,
  initLoadingPage,
  winnerOverlay
};
