import { getByClass } from './javascripts/getByClass.js';
import { rootID } from './javascripts/getById.js';
import { htmlElem } from './javascripts/innerhtml.js';
import { changeText } from './javascripts/innerText.js';
import { changeColor } from './javascripts/style.js';

const rootClass = getByClass();
rootID.appendChild(htmlElem());
console.log(rootID);
changeText();
changeColor();
