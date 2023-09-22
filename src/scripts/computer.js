class Computer {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
    this.previousAttacks = [];
  }

  attackRandom() {
    if (!this.enemyGameboard) {
      return;
    }
    let x, y;
    // Generate random coordinates until a legal move is found
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (
      this.previousAttacks.some(([prevX, prevY]) => prevX === x && prevY === y)
    );

    this.previousAttacks.push([x, y]);

    const result = this.enemyGameboard.receiveAttack(x, y);

    return result;
  }
}

export default Computer;
