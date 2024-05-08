class Cat {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  static species = "felis catus";
}

Cat.species = "Geneius";

console.log(Cat.species);
