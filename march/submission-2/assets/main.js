import { ContentComponent } from './components/Content.js';
import { HeaderComponent } from './components/Header.js';
import { images } from './data.js';

(() => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.classList.add('container');
  root.append(container);
  HeaderComponent(container);
  ContentComponent(container, images);
})(); // <- main function
