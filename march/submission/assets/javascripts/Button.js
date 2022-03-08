import { buttons } from './constant.js';

export const ButtonCalculator = (screen) => {
  buttons.forEach((button) => {
    const btn = document.createElement('button');
    btn.textContent = button.text;
    btn.classList.add('button');
    btn.value = button.operation;
    button.elem = btn;

    screen.append(btn);
  });

  return buttons;
};
