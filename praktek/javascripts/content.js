const Content = (root) => {
  const div = document.createElement('div');

  const students = [
    {
      name: 'saddam',
      kelas: '12.2A',
      nilai: 70,
    },
    {
      name: 'satria',
      kelas: '12.2A',
      nilai: 80,
    },
  ];

  div.innerHTML = `<ul>
        ${students
          .filter((item) => item.nilai > 70)
          .map((item) => {
            return ` <li>${item.name}</li> `;
          })
          .join('')}
    </ul>`;

  root.append(div);
};

export default Content;
