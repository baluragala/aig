class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return super.toString() + "in" + this.color;
  }
}

const p1 = new Point(10, 20);
console.log(p1.toString());

const p2 = new ColorPoint(30, 40, "red");
console.log(p2.toString());
