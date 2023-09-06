import GameBoard from "../gameBoard";
import Ship from "../ship"

describe("GameBoard Test", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  // Test 1: Placing a ship on the board
  test("Placing a ship on the board", () => {
    const ship = new Ship(3);
    const x = 2;
    const y = 3;

    expect(gameBoard.placeShip(x, y, ship)).toBe(true);
    expect(gameBoard.ships.has(`${x},${y}`)).toBe(true);
    expect(gameBoard.ships.has(`${x},${y + 1}`)).toBe(true);
    expect(gameBoard.ships.has(`${x},${y + 2}`)).toBe(true);
  }); 
});