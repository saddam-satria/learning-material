const getButton = (currentText, prevText) => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const { value } = e.target;
      calculating(value, currentText, prevText);
    });
  });
};

const calculating = (operation, currentText, prevText) => {
  switch (operation) {
    case 'reset':
      clear(currentText, prevText);
      break;
    case ',':
    case '00':
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      numberOperation(currentText, operation);
      break;
    case 'delete':
      deleteNumber(currentText);
      break;
    case '-':
    case '+':
    case '*':
    case '/':
    case '%':
    case '=':
      computed(operation, currentText, prevText);
      break;
    default:
      break;
  }
};

const computed = (operation, currentText, prevText) => {
  let prevOperand = prevText.innerText;
  let currentOperand = currentText.innerText;

  const prev = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  let computation;

  if (currentOperand === '') return;
  if (prevOperand !== '') {
    computation = sum(operation, prev, current);
  }

  if (operation === '=') {
    const result = sum(prevOperand[prevOperand.length - 1], prev, current);
    currentText.innerText = '';
    return (prevText.innerText = result);
  }

  if (computation) {
    prevText.innerText = computation + operation;
  } else {
    prevText.innerText = currentOperand + operation;
  }
  currentText.innerText = '';
};

const sum = (operation, prev, current) => {
  let computation;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    case '%':
      computation = (prev / 100) * 100;
      break;

    default:
      return;
  }

  return computation;
};

const clear = (currentText, prevText) => {
  currentText.textContent = '';
  prevText.textContent = '';
};

const numberOperation = (currentText, number) => {
  let string = currentText.textContent;
  if (string === '0') {
    string = '';
  }

  if (string.includes(',') && number === ',') return;
  string += number;
  currentText.textContent = string;
};

const deleteNumber = (currentText) => {
  const stringLength = currentText.textContent.length - 1;
  const current = currentText.textContent.substring(0, stringLength);

  if (stringLength < 1) return (currentText.textContent = '0');
  currentText.textContent = current;
};

export const operation = () => {
  const currentText = document.getElementsByClassName('current-text');
  const prevText = document.getElementsByClassName('prev-text');

  getButton(currentText[0], prevText[0]);
};
