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
    board.placeShip(0, 0, 3);
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
    board.placeShip(0, 0, 3);
    const shipIndex = board.getShipIndex(0);
    expect(shipIndex).toHaveProperty("coords");
    expect(shipIndex).toHaveProperty("ship");
  });

  // Test 5: receiveAttack function
  it("should register a hit when attacking a ship", () => {
    board.placeShip(2, 4, 3);
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
    board.placeShip(0, 0, 3);
    board.receiveAttack(0, 0);
    const attackResult = board.receiveAttack(0, 0);
    expect(attackResult).toBeUndefined();
  });

  // Test 6: shipsRemaining function
  it("should correctly count remaining ships", () => {
    board.placeShip(0, 0, 3);
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
    board.placeShip(0, 0, 3);
    board.placeShip(2, 0, 3);
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
});
