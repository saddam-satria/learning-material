const getUsers = async () => {
  try {
    const rawUsers = await fetch('https://saddam-webinar.herokuapp.com/api/users');
    const { users } = await rawUsers.json();
    console.log(users);
    users.map((user) => {
      addToView(user);
    });
  } catch (error) {
    console.log(error);
  }
};

// const getUsers = () => {
//   fetch('https://saddam-webinar.herokuapp.com/api/users')
//     .then((res) => res.json())
//     .then(({ users }) => {
//       users.map((user) => {
//         addToView(user);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const addToView = ({ nama, kelas, jurusan, universitas }) => {
  document.write(nama);
  document.write(kelas);
  document.write(jurusan);
  document.write(universitas);
};

(() => getUsers())();
