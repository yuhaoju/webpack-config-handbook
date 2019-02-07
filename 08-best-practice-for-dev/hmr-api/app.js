import { logToScreen } from './util';

let counter = 0;
console.log('setInterval starts');
setInterval(() => {
  counter += 1;
  logToScreen(counter);
}, 1000);

if (module.hot) {
  module.hot.decline();
  module.hot.accept(['./util.js']);
}
