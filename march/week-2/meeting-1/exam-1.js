function mappingArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 10) {
      newArray.push(element);
    }
  }

  return newArray;
}

const numbers = [9, 4, 12, 18, 10];
const result = mappingArray(numbers);
console.log(result);
