const navbar = document.querySelector('.navbar-nav');
const buttonMenu = document.querySelector('.hamburger-menu');

buttonMenu.addEventListener('click', (_e) => {
  navbar.classList.toggle('active');
});
