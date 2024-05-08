class Cat {
  static breed = "Italian"; // static class Attribute
  name: string;
  #catId: string; /// private instance attribute
  species = "Fai xhu"; // public instance attribute
  protected catOwner: string; // protected instance attribute

  constructor(name: string, owner: string) {
    this.name = name;
    this.#catId = crypto.randomUUID();
    this.catOwner = owner;
  }

  protected myProtectedMethod() {
    // protected method
    console.log("Hello from my protected");
  }
  #privateMethod() {
    // private method
    console.log("I'm Private");
  }
}

const cat = new Cat("Meow", "Kim Ji Won");
