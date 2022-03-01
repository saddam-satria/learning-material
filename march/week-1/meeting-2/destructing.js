function modulePattern() {
  const getData = {
    getName: () => {
      return 'Saddam';
    },
    getAge: () => {
      return 20;
    },
  };

  return {
    name: getData.getName(),
    age: getData.getAge(),
  };
}

const { name, age } = modulePattern();
console.log(name, age);

// const { name, age } = {
//   name: 'saddam',
//   age: 20,
// };

// const [isAdmin, address] = [true, 'Bekasi'];

// console.log(name, age, isAdmin, address);
