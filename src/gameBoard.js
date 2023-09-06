import Ship from "./ship";

class GameBoard {
  constructor() {
    this.ships = new Set();
    this.attacks = new Set();
    this.fleet = {
      destroyer: new Ship(5),
      warShip: new Ship(4),
      pocketShip: new Ship(3),
      submarine: new Ship(3), 
      patrolShip: new Ship(2),
      dummy: new Ship(1),
    };
  }

  placementIsValid(x, y) {
    const withinBounds = x >= 0 && x < 10 && y >= 0 && y < 10;
    const notOccupied = !this.ships.has([x, y].toString());

    return withinBounds && notOccupied;
  }

  // while placing the ship on the board, check if the ship can be placed at the desired coords.
  shipIsValid(x, y, ship) {
    for (let i = 0; i < ship.length; i++) {
      if (!this.placementIsValid(x, y + i)) {
        return false;
      }
    }
    return true;
  }

  placeShip(x, y, ship) {
    const shipLength = ship.length;

    if (!this.placementIsValid(x, y + (shipLength + 1))) {
      return false;
    }

    ship.coordinates = [];

    // relative coordinates for the ship and adjacent cells
    const relativeCoords = [
      [0, 0], // Current position (ship itself)
      [-1, 0], // One cell to the left
      [1, 0], // One cell to the right
      [0, -1], // One cell above
      [0, shipLength], // One cell below the last cell of the ship
      [-1, shipLength], // One cell above and to the left of the last cell
      [1, shipLength], // One cell above and to the right of the last cell
      [1, -1], // One cell below and to the right of the current position
      [-1, -1], // One cell below and to the left of the current position
    ];

    for (const [dx, dy] of relativeCoords) {
      const newX = x + dx;
      const newY = y + dy;

      if (this.placementIsValid(newX, newY)) {
        // Add the new coordinates to the Set to mark them as occupied
        this.ships.add([newX, newY].toString());
      }
    }

    // Place the ship
    for (let i = 0; i < shipLength; i++) {
      const newX = x;
      const newY = y + i;

      // Add the new ship coordinates to the ship's coordinates array
      ship.coordinates.push([newX, newY]);

      // Add the new ship coordinates to the Set to mark them as occupied
      this.ships.add([newX, newY].toString());
    }

    return true;
  }

  //check if the ship has certain coords or no (helper function for checkDamage())
  hasCoordinates(ship, targetX, targetY) {
    for (const coordinate of ship.coordinates) {
      const [x, y] = coordinate;
      if (x === targetX && y === targetY) {
        return true;
      }
    }
    return false;
  }

  //after receiving an attack, check whether the attack was a hit or no
  checkDamage(x, y) {
    for (const ships in this.fleet) {
      if (this.hasCoordinates(this.fleet[ships], x, y)) {
        return this.fleet[ships];
      }
    }
    return null;
  }

  // check if all the ships have sunk and the battle is lost
  checkLoss() {
    for (const ship in this.fleet) {
      if (!this.fleet[ship].sunk) {
        return false;
      }
    }
    return true;
  }

  //receive attack from enemy fleet
  receiveAttack(x, y) {
    const attackPosition = this.checkDamage(this.fleet, x, y);

    //check whether or not the coordinates have already been attacked
    if (attackPosition !== null) {
      this.attacks.add([x, y].toString());

      attackPosition.hit();
      attackPosition.isSunk();
      return true;
    }
    this.attacks.add([x, y].toString());
    return false;
  }
}

export default GameBoard;
