var a = 12;

if (a === 12) {
  var b = 10;
  console.log('Bener');
} else if (a !== 12) {
  console.log('Salah');
} else {
  console.log('Salah');
}

switch (a) {
  case 12:
    console.log('benar');
    break;
  case '12':
    console.log('salah');
    break;
  default:
    console.log('salah');
    break;
}
