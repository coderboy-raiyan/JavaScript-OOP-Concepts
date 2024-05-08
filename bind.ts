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

const reuseTheRingoGreet = ringo.greet.bind(kimJiWon);
reuseTheRingoGreet("Hi to the fans!!");

function payTaxAsMarket(tax: number, price: number) {
  return price + price * tax;
}

// Baking bind function
const hmTax = payTaxAsMarket.bind(null, 0.003);
console.log(hmTax(200));
