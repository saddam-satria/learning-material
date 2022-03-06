var string = 'ini adalah string loh';
var integer = 1;
var float = 0.5;
var array = [string, integer, float];
var object = {
  string: string,
  integer,
  float: float,
};

var animals = ['kucing', 'burung', 'ayam'];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);

for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  console.log(element);
}

const cat = {
  name: 'anggora',
  makanan: 'whiskas',
};

console.log(cat.name);
console.log(cat.makanan);
