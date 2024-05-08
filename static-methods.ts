class Cat {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  static species = "felis catus";

  static meow() {
    console.log(this);
  }
}

Cat.species = "Geneius";
Cat.meow();
console.log(Cat.species);
