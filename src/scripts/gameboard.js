import Ship from "./ship";

class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill("")
      .map((x) => Array(10).fill(""));
    this.ships = [];
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  getShipIndex(index) {
    return this.ships[index];
  }

  resetGameBoard() {
    this.board = Array(10)
      .fill("")
      .map((x) => Array(10).fill(""));
    this.ships = [];
  }

  isValidPlacement(x, y, len, direction) {
    // Check if x and y are within valid ranges

    if (x < 0 || x >= 10 || y < 0 || y >= 10) return false; // Invalid coordinates: x=${x}, y=${y}

    if (direction === 0) {
      if (y + len > 10) return false; // Out of bonds in horizontal

      for (let i = x; i < x + len; i++) {
        if (this.board[x][i] === "SHIP") return false; // Conflict with existing ship at x=${x}, y=${i}
      }
    } else if (direction === 1) {
      if (x + len > 10) return false; // Out of bonds in vertical

      for (let i = y; i < y + len; i++) {
        if (this.board[x][i] === "SHIP") return false; // Conflict with existing ship at x=${x}, y=${i}
      }
    } else return false; // Invalid direction

    return true;
  }

  placeShip(x, y, len, direction) {
    const ship = new Ship(len);
    const coords = [];
    for (let i = 0; i < len; i++) {
      this.board[x][y] = "SHIP";
      coords.push([x, y]);
      if (direction === 1) {
        x++;
      } else {
        y++;
      }
    }
    if (direction === 1) {
      ship.updateDirection();
    }
    this.ships.push({ coords, ship });

    return true;
  }

  autoPlaceShips() {
    const shipLengths = [5, 4, 3, 3, 2];
    for (const len of shipLengths) {
      let isValid = false;
      let x, y, direction;

      while (!isValid) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        direction = Math.random() < 0.5 ? 0 : 1;

        isValid = this.isValidPlacement(x, y, len, direction);
      }

      this.placeShip(x, y, len, direction);
    }
  }

  receiveAttack(x, y) {
    const cell = this.board[x][y];

    // check if the cell is already attacked
    if (cell === "hit" || cell === "miss") return;

    const attackResult = cell === "" ? "miss" : "hit";
    this.board[x][y] = attackResult;

    if (attackResult === "hit") {
      const { shipIndex, coordIndex } = this.findShipbyCoordinates(x, y);

      if (shipIndex !== -1 && coordIndex !== -1) {
        this.ships[shipIndex].ship.hit(coordIndex);

        if (this.ships[shipIndex].ship.isSunk()) {
          this.ships[shipIndex].coords.forEach((coord) => {
            const [shipX, shipY] = coord;
            this.board[shipX][shipY] = "sunk";
          });
        }
      }
    }
    return attackResult;
  }

  findShipbyCoordinates(x, y) {
    const foundShip = this.ships.find((shipObj) => {
      return shipObj.coords.some((coord) => coord[0] === x && coord[1] === y);
    });

    if (foundShip) {
      const shipIndex = this.ships.indexOf(foundShip);
      const coordIndex = foundShip.coords.findIndex(
        (coord) => coord[0] === x && coord[1] === y,
      );
      return { shipIndex, coordIndex };
    }

    return { shipIndex: -1, coordIndex: -1 };
  }

  shipsRemaining() {
    return this.ships.filter((shipObj) => !shipObj.ship.isSunk()).length;
  }

  gameover() {
    return this.ships.every((shipObj) => shipObj.ship.isSunk());
  }
}

export default Gameboard;
