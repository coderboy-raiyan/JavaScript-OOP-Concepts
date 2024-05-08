class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  //   factory static Method
  static create<T extends User>(obj: T) {
    return new User(obj.name, obj.email, obj.password);
  }
}

const user = User.create({
  name: "Raiyan",
  email: "taj@gmail.com",
  password: "1234",
});
console.log(user.email);
