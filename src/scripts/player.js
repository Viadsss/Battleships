class Player {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
  }

  attack(x, y) {
    if (!this.enemyGameboard) {
      return;
    }
    const result = this.enemyGameboard.receiveAttack(x, y);
    return result;
  }
}

export default Player;
