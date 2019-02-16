import Vue from 'vue';
import App from './App.vue';

const container = document.createElement('div');
container.id = 'app';
document.body.prepend(container);

new Vue({
  el: '#app',
  render: h => h(App),
});
