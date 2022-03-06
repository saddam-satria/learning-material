const Header = (root) => {
  const div = document.createElement('div');
  const biodata = {
    name: 'saddam',
    age: 20,
    nilai: 80,
  };

  div.innerHTML = `<h1>${biodata.name}</h1>`;

  div.style.backgroundColor = biodata.nilai > 80 ? 'blue' : 'red';
  div.style.padding = '10px';

  root.append(div);
};

export default Header;
