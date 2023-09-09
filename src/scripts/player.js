class Player {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
  }

  attack(x, y) {
    if (!this.enemyGameboard) {
      console.log("Error: Enemy Gameboard not set");
      return;
    }

    const result = this.enemyGameboard.receiveAttack(x, y);

    // if (result === "hit") {
    //   console.log(`${this.name} hit at (${x}, ${y})!`);
    // } else if (result === "sunk") {
    //   console.log(`${this.name} sank a ship at (${x}, ${y})!`);
    // } else {
    //   console.log(`${this.name} missed at (${x}, ${y}).`);
    // }

    return result;
  }

  takeTurn(x, y) {
    this.attack(x, y);

    // Check for game over condition
    if (this.enemyGameboard.gameover()) {
      console.log(`${this.name} wins the game!`);
    }
  }
}


export default Player;