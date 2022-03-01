const fruits = ['orange', 'apple', 'mango'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((item, index) => {
  console.log(item, index);
});
