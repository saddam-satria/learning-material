const promises = new Promise((resolve, reject) => {
  const name = 'saddam';
  if (name !== 'saddam') reject("you're not saddam");
  resolve("you're saddam");
});

promises.then((data) => console.log(data)).catch((error) => console.error(error));
