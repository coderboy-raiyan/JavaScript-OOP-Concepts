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
class ColorTriangle extends Triangle {
  color: string;
  constructor(a: number, b: number, color: string) {
    // if wanted to take extra properties we need constructor with super to pass those to parent
    super(a, b);
    this.color = color;
  }
  describe() {
    console.log(`I am a Color triangle with area of ${this.getArea()}m`);
  }
}

const colorTri = new ColorTriangle(12, 20, "Red");
colorTri.describe();
