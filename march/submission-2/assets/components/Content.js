export const ContentComponent = (container, images) => {
  const content = document.createElement('div');
  const buttons = document.querySelectorAll('.button');
  content.classList.add('content');

  content.innerHTML = `<div>
  ${images.map((image) => {
    return (content.innerHTML = ` 
        <image class="image" src="${image.url}"></image>
      `);
  })}
  </div>`;

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const category = button.textContent.toLowerCase();
      content.innerHTML = `<div>
      ${images
        .filter((image) => image.cat === category)
        .map((image) => {
          return (content.innerHTML = ` 
            <image class="image" src="${image.url}"></image>
          `);
        })}
      </div>`;
    });
  });

  container.append(content);
};
