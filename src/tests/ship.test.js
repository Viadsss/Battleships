import Ship from "../ship";

describe("Ship Test", () => {
  // Test 1: ship is not hit
  test("Ship is not hit", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hitCount).toBe(0);
    expect(ship.isSunk()).toBe(false);
  });

  // Test 2: ship is partially hit
  test("Ship is partially hit", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    expect(ship.length).toBe(5);
    expect(ship.hitCount).toBe(2);
    expect(ship.isSunk()).toBe(false);
  });

  // Test 3: Ship is fully hit and sunk
  test("Ship is fully hit and sunk", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.length).toBe(2);
    expect(ship.hitCount).toBe(2);
    expect(ship.isSunk()).toBe(true);
  });

  // Test case 4: Hitting a ship more times than its length
  test("Hitting a ship more times than its length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Extra hit
    expect(ship.length).toBe(3);
    expect(ship.hitCount).toBe(4);
    expect(ship.isSunk()).toBe(false);
  });

  // Test case 5: Creating a ship with default parameters
  test("Creating a ship with default parameters", () => {
    const ship = new Ship();
    expect(ship.length).toBe(1); // Default length
    expect(ship.hitCount).toBe(0); // Default hitCount
    expect(ship.isSunk()).toBe(false);
  });
});
