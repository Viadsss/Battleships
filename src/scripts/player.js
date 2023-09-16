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
    return result;
  }
}

export default Player;
