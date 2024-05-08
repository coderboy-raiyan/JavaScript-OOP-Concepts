const ringo = {
  name: "Ringo",
  greet: function (greeting: string) {
    console.log(`${this.name} says ${greeting}`);
  },
};

const kimJiWon = {
  name: "kim Ji Won",
  designation: "K POP Artist",
};

ringo.greet.apply(kimJiWon, ["Hi to the fans !!"]);

const nums = [1, 2, 3, 4];
console.log(Math.max.apply(null, nums));
