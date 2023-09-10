import Gameboard from "../scripts/gameboard";

describe("Gameboard Test", () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  // Test 1: Initialization
  it("should be initialized with an empty 10x10 and no ships", () => {
    expect(board.getBoard()).toEqual([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    expect(board.getShips()).toEqual([]);
  });

  it("should return true for valid horizontal ship placement", () => {
    // Place a ship horizontally at (2, 3) with a length of 3
    const isValid = board.isValidPlacement(2, 3, 3, 0);
    expect(isValid).toBe(true);
  });

  it("should return false for out-of-bounds horizontal placement", () => {
    // Attempt to place a ship horizontally at (9, 9) with a length of 2 (out of bounds)
    const isValid = board.isValidPlacement(9, 9, 2, 0);
    expect(isValid).toBe(false);
  });

  it("should return false for overlapping horizontal ship placement", () => {
    // Place a ship horizontally at (3, 2) with a length of 3
    board.placeShip(3, 2, 3, 0);
    // Attempt to place another ship horizontally at (3, 3) with a length of 2 (overlap)
    const isValid = board.isValidPlacement(3, 3, 2, 0);
    expect(isValid).toBe(false);
  });

  it("should return true for valid vertical ship placement", () => {
    // Place a ship vertically at (4, 5) with a length of 4
    const isValid = board.isValidPlacement(4, 5, 4, 1);
    expect(isValid).toBe(true);
  });

  it("should return false for out-of-bounds vertical placement", () => {
    // Attempt to place a ship vertically at (8, 8) with a length of 3 (out of bounds)
    const isValid = board.isValidPlacement(8, 8, 3, 1);
    expect(isValid).toBe(false);
  });

  it("should return false for overlapping vertical ship placement", () => {
    // Place a ship vertically at (6, 4) with a length of 3
    board.placeShip(6, 4, 3, 1);
    // Attempt to place another ship vertically at (7, 4) with a length of 2 (overlap)
    const isValid = board.isValidPlacement(7, 4, 2, 1);
    expect(isValid).toBe(false);
  });

  it("should return false for invalid direction", () => {
    // Attempt to place a ship with an invalid direction
    const isValid = board.isValidPlacement(2, 2, 3, 2);
    expect(isValid).toBe(false);
  });

  // Test 2: placeShip function
  it("should be place a ship on the board correctly", () => {
    board.placeShip(0, 0, 3, 0);

    expect(board.getBoard()).toEqual([
      ["SHIP", "SHIP", "SHIP", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    expect(board.getShips()).toHaveLength(1);
  });

  it("should place a ship vertically on the board correctly", () => {
    board.placeShip(0, 0, 3, 1); // Vertical direction

    expect(board.getBoard()).toEqual([
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    expect(board.getShips()).toHaveLength(1);
  });

  // Test 3: resetGameBoard function
  it("should reset the board and ships", () => {
    board.placeShip(0, 0, 3, 0);
    board.resetGameBoard();

    expect(board.getBoard()).toEqual([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    expect(board.getShips()).toEqual([]);
  });

  // Test 4: getShipIndex function
  it("should return the correct ship object", () => {
    board.placeShip(0, 0, 3, 0);
    const shipIndex = board.getShipIndex(0);
    expect(shipIndex).toHaveProperty("coords");
    expect(shipIndex).toHaveProperty("ship");
  });

  // Test 5: receiveAttack function
  it("should register a hit when attacking a ship", () => {
    board.placeShip(2, 4, 3, 0);
    const attackResult = board.receiveAttack(2, 5);
    expect(attackResult).toBe("hit");

    expect(board.getBoard()).toEqual([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "SHIP", "hit", "SHIP", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  it("should register a miss when attacking an empty cell", () => {
    const attackResult = board.receiveAttack(0, 0);
    expect(attackResult).toBe("miss");

    expect(board.getBoard()).toEqual([
      ["miss", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
  });

  it("should not allow attacking the same cell twice", () => {
    board.placeShip(0, 0, 3, 0);
    board.receiveAttack(0, 0);
    const attackResult = board.receiveAttack(0, 0);
    expect(attackResult).toBeUndefined();
  });

  // Test 6: shipsRemaining function
  it("should correctly count remaining ships", () => {
    board.placeShip(0, 0, 3, 0);
    expect(board.shipsRemaining()).toBe(1);

    board.receiveAttack(0, 0);
    expect(board.shipsRemaining()).toBe(1);

    board.receiveAttack(0, 1);
    expect(board.shipsRemaining()).toBe(1);

    board.receiveAttack(0, 2);
    expect(board.shipsRemaining()).toBe(0);
  });

  // Test 7: gameover function
  it("should correctly determine if the game is over", () => {
    board.placeShip(0, 0, 3, 0);
    board.placeShip(2, 0, 3, 0);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(0, 0);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(0, 1);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(0, 2);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(2, 0);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(2, 1);
    expect(board.gameover()).toBe(false);

    board.receiveAttack(2, 2);
    expect(board.gameover()).toBe(true);

    expect(board.getBoard()).toEqual([
      ["hit", "hit", "hit", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["hit", "hit", "hit", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    expect(board.getShips()).toHaveLength(2);
  });

  // Test 8:  autoPlaceShip function
  it("should auto-place ships with valid placements", () => {
    const board = new Gameboard();

    board.autoPlaceShips();
    const ships = board.getShips();

    expect(ships).toHaveLength(5);
    // Loop through the ships and check their validity
    for (const shipInfo of ships) {
      const { coords, ship } = shipInfo;

      // Ensure the ship's length matches the expected length
      // console.log(ship, coords);
      expect(ship.length).toBe(coords.length);
    }
  });
});
