import { CalculatorDisplay } from './javascripts/Display.js';
import { operation } from './javascripts/operation.js';

(() => {
  const root = document.getElementById('root');

  CalculatorDisplay(root);
  operation();
})();
