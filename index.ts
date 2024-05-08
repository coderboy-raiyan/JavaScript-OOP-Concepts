class Circle {
  protected radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  //   Getter
  get getDiameter() {
    return this.radius * 2;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.getDiameter);
