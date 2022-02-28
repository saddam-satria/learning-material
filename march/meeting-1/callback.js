function user(callback) {
  const userData = {
    firtname: 'saddam',
    lastname: 'satria',
    age: 20,
  };

  callback(userData);
}

user((userData) => {
  console.log(userData);
});
