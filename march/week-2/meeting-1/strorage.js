const setItem = () => {
  localStorage.setItem(
    'items',
    JSON.stringify({
      animals: ['cat', 'swan', 'bird'],
    })
  );
};

setItem();

const getItem = () => {
  return JSON.parse(localStorage.getItem('items'));
};

const { animals } = getItem();

const clearStorage = () => {
  localStorage.clear();
};

clearStorage();

const deleteItem = () => {
  localStorage.removeItem('items');
};

deleteItem();
