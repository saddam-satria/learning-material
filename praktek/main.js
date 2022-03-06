import Content from './javascripts/content.js';
import Header from './javascripts/header.js';

(() => {
  const root = document.getElementById('root');

  Header(root);
  Content(root);
})();
