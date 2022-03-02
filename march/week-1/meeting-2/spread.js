const fruits = ['apple', 'orange'];
const newFruit = 'mango';
const finalFruits = [...fruits, newFruit];

const student = {
  name: 'Saddam',
  age: 20,
};

const country = 'indonesia';

const biodata = {
  ...student,
  country,
};

console.log(finalFruits);
console.log(biodata);
