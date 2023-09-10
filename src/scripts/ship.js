class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.direction = 0; // 0 is horizontal, 1 is vertical
    this.position = Array(length).fill(0);
  }

  hit(num) {
    if (num >= 0 && num < this.length && this.position[num] !== 1) {
      // Check if the position hasn't been hit before
      this.position[num] = 1;
      this.hitCount++;
    }
  }

  isHit() {
    return this.hitCount > 0;
  }

  isSunk() {
    return this.hitCount === this.length;
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  updateDirection() {
    this.direction = (this.direction + 1) % 2;
  }
}

export default Ship;
