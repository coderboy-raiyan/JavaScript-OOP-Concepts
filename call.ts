class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  static getCat() {
    console.log("Class ", this);
  }
  getIntro(dance: string = "tango") {
    console.log("Instance", this);
    console.log(`Hello my name is ${this.name}. I like ${dance}`);
  }
}

const robin = new Cat("Robin");
const kitty = new Cat("kitty");

const robinOnDance = robin.getIntro;
robinOnDance.call(robin, "salsa");

const kittyOnDance = kitty.getIntro;
kittyOnDance.call(kitty, "tanga");

const obj = {
  name: "kim ji won",
  getProfile() {
    console.log(this.name);
  },
};

const obj2 = {
  name: "kim Soo hyun",
};

obj.getProfile.call(obj2);

const fun = obj.getProfile;
fun.call(obj2);
