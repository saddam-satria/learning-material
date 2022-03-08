import { ButtonCalculator } from './Button.js';
import { TextDisplay } from './TextDisplay.js';

export const CalculatorDisplay = (root) => {
  const container = document.createElement('div');
  const calculator = document.createElement('div');
  const screen = document.createElement('div');
  const buttonScreen = document.createElement('div');

  container.classList.add('container');
  calculator.classList.add('calculator');
  screen.classList.add('screen');
  buttonScreen.classList.add('button-screen');

  screen.append(TextDisplay().prevText);
  screen.append(TextDisplay().currentText);
  calculator.append(screen);
  calculator.append(buttonScreen);
  ButtonCalculator(buttonScreen);
  container.append(calculator);
  root.append(container);
};
