import './style.css';
import writeContent from './writeContent.js';
document.write('My first Webpack app.<br/>');
writeContent();

if (module.hot) {
  module.hot.accept();
}
