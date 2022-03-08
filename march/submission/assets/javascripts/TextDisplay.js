export const TextDisplay = () => {
  const calculatorText = document.createElement('span');
  const prevNumber = document.createElement('span');

  prevNumber.textContent = '';
  calculatorText.textContent = '';
  calculatorText.classList.add('current-text');
  prevNumber.classList.add('prev-text');

  return { currentText: calculatorText, prevText: prevNumber };
};
