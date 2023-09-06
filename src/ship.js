class Ship {
  constructor(length = 1, hitCount = 0, sunk = false) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunk = sunk;
    this.coordinates = [];
  }

  hit() {
    this.hitCount += 1;
  }

  isSunk() {
    if (this.hitCount === this.length) return (this.sunk = true);
    return this.sunk;
  }
}

export default Ship;
