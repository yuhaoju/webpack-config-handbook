import { logToScreen } from './util';
export default function startInterval() {
  let counter = 0;
  console.log('setInterval starts');
  setInterval(() => {
    counter += 1;
    logToScreen(counter);
  }, 1000);
}
