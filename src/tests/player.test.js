import Player from "../scripts/player";
import Gameboard from "../scripts/gameboard";

describe("Player Test", () => {
  let player1;
  let player2;
  let gameboard1;
  let gameboard2;

  beforeEach(() => {
    gameboard1 = new Gameboard();
    gameboard2 = new Gameboard();
    player1 = new Player("Player 1", gameboard2);
    player2 = new Player("Player 2", gameboard1);
  });

  it("should make an attack and miss", () => {
    const result = player1.attack(0, 0);
    expect(result).toBe("miss");
  });

  it("should make an attack and hit", () => {
    gameboard2.placeShip(0, 0, 3, 0); // Place a ship at (0, 0) for player 2's gameboard

    const result = player1.attack(0, 0);
    expect(result).toBe("hit");
  });

  it("should make an attack and sink a ship", () => {
    gameboard2.placeShip(0, 0, 2, 1); // Place a ship at (0, 0) for player 2's gameboard

    const result1 = player1.attack(0, 0);
    expect(result1).toBe("hit");

    const result2 = player1.attack(1, 0);
    expect(result2).toBe("sunk");

    // After both parts of the ship are hit, it should be considered "sunk."
    const result3 = player1.attack(0, 0);
    expect(result3).toBeUndefined();
  });

  it("should take turns and declare a winner", () => {
    gameboard1.placeShip(0, 0, 2, 1); // Place a ship of length 2 at (0, 0) for player 1's gameboard
    gameboard2.placeShip(2, 1, 2, 0); // Place a ship of length 2 at (2, 1) for player 2's gameboard
    expect(gameboard1.getBoard()).toEqual([
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    expect(gameboard2.getBoard()).toEqual([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "SHIP", "SHIP", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    player1.takeTurn(0, 0);
    expect(gameboard2.getBoard()).toEqual([
      ["miss", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "SHIP", "SHIP", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    player2.takeTurn(0, 0);
    expect(gameboard1.getBoard()).toEqual([
      ["hit", "", "", "", "", "", "", "", "", ""],
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    player1.takeTurn(2, 1);
    expect(gameboard2.getBoard()).toEqual([
      ["miss", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "hit", "SHIP", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    player2.takeTurn(0, 1);
    expect(gameboard1.getBoard()).toEqual([
      ["hit", "miss", "", "", "", "", "", "", "", ""],
      ["SHIP", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    player1.takeTurn(2, 2);
    expect(gameboard2.getBoard()).toEqual([
      ["miss", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "hit", "hit", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);

    expect(player1.enemyGameboard.gameover()).toBe(true);
    expect(player2.enemyGameboard.gameover()).toBe(false);
  });
});
