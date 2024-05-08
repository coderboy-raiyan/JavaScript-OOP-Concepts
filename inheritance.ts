// Parent Class
class Triangle {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Please provide number");
    }
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  describe() {
    console.log(`I am a triangle with area of ${this.getArea()}m`);
  }
}
// Derived Class from Triangle
class ShyTriangle extends Triangle {
  describe() {
    console.log(`I am a shy triangle with area of ${this.getArea()}m`);
  }
}

const shy = new ShyTriangle(12, 20);
shy.describe();
