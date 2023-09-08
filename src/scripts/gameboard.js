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
    if (direction === 0) {
      ship.updateDirection();
    }
    this.ships.push({ coords, ship });
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
          return "sunk";
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
