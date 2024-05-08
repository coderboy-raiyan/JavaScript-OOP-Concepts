class Circle {
  protected radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  //   Getter
  get getDiameter() {
    return this.radius * 2;
  }

  set updateRadius(value: number) {
    this.radius = value;
  }
}

const myCircle = new Circle(10);
myCircle.updateRadius = 20;
console.log(myCircle.getDiameter);
