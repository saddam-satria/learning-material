export const htmlElem = () => {
  const div = document.createElement('div');
  div.innerHTML = '<h1>Hello World</h1>';

  return div;
};
