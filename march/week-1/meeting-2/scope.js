const name = 'saddam';
if (name === 'saddam') {
  const age = 20;
  console.log(name);
}

// ReferenceError: age is not defined
// console.log(age);

function getAge() {
  const age = 20;
  const gender = true;
  if (age === 20) {
    console.log(gender);
  }

  // ReferenceError: gender is not defined
  //   console.log(gender);
  console.log(age);
}

// ReferenceError: age is not defined
// console.log(age);
getAge();
