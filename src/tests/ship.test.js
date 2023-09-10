import Ship from "../scripts/ship";

describe("Ship Test", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  // Test 1 : Initialization
  it("should be initialized correctly", () => {
    expect(ship.length).toBe(3);
    expect(ship.hitCount).toBe(0);
    expect(ship.direction).toBe(0);
    expect(ship.position).toEqual([0, 0, 0]);
  });

  // Test 2 : hit function
  it("should register a hit and update hitCount and position", () => {
    ship.hit(1);
    expect(ship.length).toBe(3);
    expect(ship.hitCount).toBe(1);
    expect(ship.direction).toBe(0);
    expect(ship.position).toEqual([0, 1, 0]);
  });

  it("should not allow hitting out-of-bounds positions", () => {
    // Try hitting positions outside the ship's length
    ship.hit(-1);
    ship.hit(3);
    expect(ship.hitCount).toBe(0);
    expect(ship.position).toEqual([0, 0, 0]);
  });

  it("should not register a hit for the same position twice", () => {
    ship.hit(2);
    ship.hit(2);
    expect(ship.length).toBe(3);
    expect(ship.hitCount).toBe(1);
    expect(ship.direction).toBe(0);
    expect(ship.position).toEqual([0, 0, 1]);
  });

  // Test 3: isHit function
  it("should correctly check if the ship is hit", () => {
    expect(ship.isHit()).toBe(false);
    ship.hit(1);
    expect(ship.isHit()).toBe(true);
  });

  // Tesst 4: isSunk function
  it("should correcty check if the ship is sunk", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
    // Hitting it again should not change isSunk status
    ship.hit(0);
    expect(ship.isSunk()).toBe(true);
  });

  // Test 5: updateDirection function
  it("should toggle the ship direction", () => {
    expect(ship.getDirection()).toBe(0);
    ship.updateDirection();
    expect(ship.getDirection()).toBe(1);
    ship.updateDirection();
    expect(ship.getDirection()).toBe(0);
  });
});
