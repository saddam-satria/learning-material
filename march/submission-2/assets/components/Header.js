export const HeaderComponent = (container) => {
  const Header = document.createElement('div');

  Header.classList.add('header');
  Header.innerHTML = `
      <div class="button-screen">
        <button class="button">Foods</button>
        <button class="button">Drinks</button>
      </div>
  `;

  container.append(Header);
};
