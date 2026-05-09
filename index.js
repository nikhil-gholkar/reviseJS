class Area {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.height * this.width;
  }

  paint() {
    return `paint this area ${this.area()} with color ${this.color}`;
  }
}

const rect = new Area(5, 2, "red");

console.log(rect.area());
console.log(rect.paint());
