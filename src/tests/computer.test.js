import Player from "../scripts/player";
import Computer from "../scripts/computer";
import Gameboard from "../scripts/gameboard";

describe("Player vs Computer Test", () => {
  let player;
  let computer;
  let playerGameboard;
  let computerGameboard;

  beforeEach(() => {
    playerGameboard = new Gameboard();
    computerGameboard = new Gameboard();
    player = new Player("Player", computerGameboard);
    computer = new Computer("Computer", playerGameboard);
  });

  it("should make an attack and miss", () => {
    const result = computer.attackRandom();
    expect(result).toBe("miss");
  });

  it("should simulate a game between Player and Computer", () => {
    playerGameboard.placeShip(0, 0, 2, 1); // Place a ship of length 2 at (0, 0) for player's gameboard
    computerGameboard.placeShip(2, 1, 2, 0); // Place a ship of length 2 at (2, 1) for computer's gameboard

    expect(playerGameboard.getBoard()).toEqual([
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

    expect(computerGameboard.getBoard()).toEqual([
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

    let playerTurn = true; // Track whose turn it is

    // Simulate the game by taking turns until a winner is declared
    while (true) {
      if (playerTurn) {
        player.attack(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ); // Player makes a random move
      } else {
        computer.attackRandom(); // Computer makes a random move
      }

      // Check if the game is over
      if (computerGameboard.gameover()) {
        // console.log("Player wins the game!");
        break;
      }

      if (playerGameboard.gameover()) {
        // console.log("Computer wins the game!");
        break;
      }

      // Toggle the turn
      playerTurn = !playerTurn;
    }
  });
});
