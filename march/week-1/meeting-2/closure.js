// function scope
let age = 32;
function greeting() {
  const name = 'saddam';
  function printName() {
    return name;
  }

  console.log(printName());
}
console.log(name);
greeting();

// block scope
for (let i = 0; i <= 5; i++) {
  age++;
  var country = 'indonesia';
}
console.log(country);
